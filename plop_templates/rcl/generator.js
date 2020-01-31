module.exports = {
  description: 'This will create a rcl new component',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: "What's the name of this component?",
      validate(value) {
        if ((/.+/).test(value)) {
          return true;
        }

        return 'name is required';
      }
    },
    {
      type: 'input',
      name: 'parents',
      message: 'Where should it go? i.e. Atoms / Molecules or just press enter if is top level component.'
    }
  ],
  actions: (rawData) => {
    const { parents = '', name } = rawData;

    const data = {
      ...rawData
    };

    const actions = [
      {
        type: 'add',
        path: 'src/rcl/components/{{ parents }}/{{properCase name}}/index.tsx',
        templateFile: 'plop_templates/rcl/tsx_template.txt',
        data,
        abortOnFail: false
      },
      {
        type: 'add',
        path: 'src/rcl/components/{{ parents }}/{{properCase name}}/README.md',
        templateFile: 'plop_templates/rcl/README_template.txt',
        data,
        abortOnFail: false
      },
      {
        type: 'add',
        path: 'src/rcl/components/{{ parents }}/{{properCase name}}/__tests__/index.test.js',
        templateFile: 'plop_templates/test_template.txt',
        data,
        abortOnFail: false
      }
    ];

    return actions;
  }
};
