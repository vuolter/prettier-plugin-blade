import { AstPath } from "prettier";

export const print = (path: AstPath) => {
  const node = path.getValue();

  switch (node.type) {
    case "blade-formatter": {
      return node.body;
    }
  }

  throw new Error(`Unknown node type: ${node.type}`);
};
