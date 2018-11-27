const template = {
  pagination: {
    has_next: false,
    next_page: null,
    page: 1,
    total: 1,
  },
  templates: [
    {
      attrs: [
        {
          label: 'temp',
          static_value: '',
          type: 'dynamic',
          value_type: 'float',
        },
        {
          label: 'protocol',
          static_value: 'mqtt',
          type: 'meta',
          value_type: 'string',
        },
      ],
      id: 1,
      label: 'template',
    },
  ],
};

module.exports = template;
