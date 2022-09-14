import { Box, Container, Heading } from "@chakra-ui/react";
import React, { useState } from "react";
import ReactFlow, { Node, Edge } from "react-flow-renderer";

const initialNodes: Node[] = [
  {
    id: "1",
    type: "input",
    data: { label: "Current product" },
    position: { x: 250, y: 25 },
  },

  {
    id: "2",
    type: "output",
    data: { label: "Educational Product" },
    position: { x: 100, y: 125 },
  },
  {
    id: "3",
    type: "output",
    data: { label: "Retail Product" },
    position: { x: 400, y: 125 },
  },
];

const initialEdges: Edge[] = [
  { id: "e1-2", source: "1", target: "2", type: "smoothstep" },
  { id: "e2-3", source: "1", target: "3", type: "smoothstep" },
];

export default function Roadmap() {
  const [nodes, setNodes] = useState<Node[]>(initialNodes);
  const [edges, setEdges] = useState<Edge[]>(initialEdges);
  return (
    <Box id="roadmap" w="full" pt="20">
      <Heading textAlign="center">Roadmap</Heading>
      <Container maxW="container.xl" w="full" h={500}>
        <ReactFlow
          proOptions={{ hideAttribution: true, account: "paid-custom" }}
          panOnDrag={false}
          nodesConnectable={false}
          elementsSelectable={false}
          zoomOnScroll={false}
          zoomOnPinch={false}
          zoomOnDoubleClick={false}
          preventScrolling={false}
          nodes={nodes}
          edges={edges}
          fitView
        />
      </Container>
    </Box>
  );
}
