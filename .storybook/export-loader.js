module.exports = function(content, map, meta) {
  constent = content.replace(
    /export ?{\s* default as (.+?)}(.+)/g,
    `import _$1 $2
     export const $1 = () => _$1`.trim()
  );
  this.callback(null, content, map, meta);
  return;
};
