function generateDynamicStyles({ addComponents }) {
  const components = {};

  for (let i = 1; i <= 12; i++) {
    components[`.grid-equal-cols-${i}`] = {
      gridAutoColumns: `${i}fr`
    };
  }

  addComponents(components);
} 

function commonStyles({ addComponents }) {
  addComponents({
    ".case-on": {
      'font-feature-settings': '"case" on'
    },
    ".uppercase": {
      'font-feature-settings': '"case" on',
      'text-transform': 'uppercase'
    },
    ".ellipsis": {
      "text-overflow": "ellipsis",
      "overflow": "hidden"
    }
  });
}

module.exports = { generateDynamicStyles, commonStyles };

