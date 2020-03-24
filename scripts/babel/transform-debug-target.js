const warningDevCheckTemplate = `
  if (process.env.NODE_ENV !== 'production') {
    NODE;
  }
`.trim();

const visited = 'visitedByDebugTargetTransformer';
const calleeProperty = 'dispatchEvent';
const calleeObject = 'debugTarget';

const plugin = ({ template, types: t }) => {
  const wrapWithDevCheck = template(
    warningDevCheckTemplate,
    { placeholderPattern: /^NODE$/ }
  );

  return {
    visitor: {
      ExpressionStatement(path) {
        if (
          !path.node[visited] &&
          path.node.expression.callee &&
          path.node.expression.callee.object &&
          path.node.expression.callee.object.property &&
          path.node.expression.callee.object.property.name === calleeObject &&
          path.node.expression.callee.property.name === calleeProperty
       	) {
          path.node[visited] = true;
          path.replaceWith(wrapWithDevCheck({ NODE: path.node }));
        }
      }
    }
  };
};

export default plugin;