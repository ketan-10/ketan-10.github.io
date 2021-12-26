import React, { useRef, useEffect } from "react";
import * as d3 from "d3";



const width = 700;
// const width = window.innerWidth > 0 ? window.innerWidth : screen.width;
const dy = width / 9;
// const dx = 15;

const windowWidth = window.innerWidth;
const value = 18000;
const dx = Math.min(Math.max(value / windowWidth, 15), 40);
console.log("dx: ",dx);
console.log("window-width ",windowWidth);
console.log("value / window-width  ",value / windowWidth);
const margin = { top: dx, right: 0, bottom: dy, left: dx+40 };

const font_size = dx / 1.5;
console.log("font-size: ",font_size);
const tree = d3.tree().nodeSize([dx, dy]);
const diagonal = d3
  .linkHorizontal()
  .x((d) => d.y)
  .y((d) => d.x);

const ketan = "केतन";
const ketanLocation = "01020000";

const FamilyTree = () => {
  const svgRef = useRef();
  const svgLinks = useRef();
  const svgNodes = useRef();

  // https://github.com/facebook/react/issues/14326 -> Async useEffect is pretty much unreadable #14326
  useEffect(() => {
    async function fetchData() {
      const data = await d3.json("/portfolio/data.json");
      // const data = d3.json();
      console.log(data);
      const root = d3.hierarchy(data, (d) => d.c);
      console.log(root);
      root.x0 = dy / 2;
      root.y0 = 0;
      root.descendants().forEach((d, i) => {
        d.id = i;
        d._children = d.children;
        // all my direct ancestors.
        d.children = ketanLocation.startsWith(d.data.i) ? d.children: null;
      });

      const svg = d3
        .select(svgRef.current)
        // .attr("viewBox", [-margin.left, -margin.top, width, dx])
        .style("font", "10px sans-serif")
        .style("user-select", "none");

      const gLink = d3
        // .append("g")
        .select(svgLinks.current)
        .attr("fill", "none")
        .attr("stroke", "var(--slate)")
        .attr("stroke-opacity", 0.4)
        .attr("stroke-width", 1.5);

      const gNode = d3
        .select(svgNodes.current)
        .attr("pointer-events", "all");

      function update(source) {
        const duration = d3.event && d3.event.altKey ? 2500 : 250;
        console.log(duration);
        const nodes = root.descendants().reverse();
        const links = root.links();

        // Compute the new tree layout.
        tree(root);

        // find most left and most right node
        let left = root;
        let right = root;
        root.eachBefore((node) => {
          if (node.x < left.x) left = node;
          if (node.x > right.x) right = node;
        });

        const height = right.x - left.x + margin.top + margin.bottom;


        const transition = svg
          .transition()
          .duration(duration)
          .attr("viewBox", [-margin.left, left.x - margin.top, width, height])
          .tween(
            "resize",
            window.ResizeObserver ? null : () => () => svg.dispatch("toggle")
          );

        // Update the nodes…  // text nodes
        const node = gNode.selectAll("g").data(nodes, (d) => d.id);

        // Enter any new nodes at the parent's previous position.
        const nodeEnter = node
          .enter()
          .append("g")
          .attr("transform", (d) => `translate(${source.y0},${source.x0})`)
          .attr("cursor", (d) => (d._children ? "pointer": "default"))
          .attr("fill-opacity", 0)
          .attr("stroke-opacity", 0)
          .on("click", (d) => {
            d.children = d.children ? null : d._children;
            update(d);
          });

        nodeEnter
          .append("circle")
          .attr("r", 2.5)
          .attr("fill", (d) => (d._children ? "transparent" : "var(--light-slate)"))
          .attr("stroke", (d) => (d._children ? "var(--green)": null))
          .attr("stroke-width", 1);

        nodeEnter
          .append("text")
          .attr("dy", "0.31em")
          .attr("font-size", font_size)
          .attr("x", (d) => (d._children ? -6 : 6))
          // .attr("x", (d) => -6)
          .attr("text-anchor", (d) => (d._children ? "end" : "start"))
          .text((d) => d.data.v)
          .attr("fill", (d) => (d.data.v === ketan ? "var(--white)" : d._children ? "var(--green)": "var(--lightest-slate)"));

        // Transition nodes to their new position.
        const nodeUpdate = node
          .merge(nodeEnter)
          .transition(transition)
          .attr("transform", (d) => `translate(${d.y},${d.x})`)
          .attr("fill-opacity", 1)
          .attr("stroke-opacity", 1);

        // Transition exiting nodes to the parent's new position.
        const nodeExit = node
          .exit()
          .transition(transition)
          .remove()
          .attr("transform", (d) => `translate(${source.y},${source.x})`)
          .attr("fill-opacity", 0)
          .attr("stroke-opacity", 0);

        // Update the links…
        const link = gLink.selectAll("path").data(links, (d) => d.target.id);

        // Enter any new links at the parent's previous position.
        const linkEnter = link
          .enter()
          .append("path")
          .attr("d", (d) => {
            const o = { x: source.x0, y: source.y0 };
            return diagonal({ source: o, target: o });
          });

        // Transition links to their new position.
        link.merge(linkEnter).transition(transition).attr("d", diagonal);

        // Transition exiting nodes to the parent's new position.
        link
          .exit()
          .transition(transition)
          .remove()
          .attr("d", (d) => {
            const o = { x: source.x, y: source.y };
            return diagonal({ source: o, target: o });
          });

        // Stash the old positions for transition.
        root.eachBefore((d) => {
          d.x0 = d.x;
          d.y0 = d.y;
        });
      }

      update(root);
    }
    fetchData();
  }, []);

  return (
    <div className="family-tree">
      <svg ref={svgRef}>
        <g ref={svgLinks}></g>
        <g ref={svgNodes}></g>
      </svg>
    </div>
  );
};
export default FamilyTree;
