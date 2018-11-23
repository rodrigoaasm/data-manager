const flow = {
  flows: [
    {
      name: 'Flow',
      enabled: true,
      id: 'de9e3b42-6125-4b53-8c87-6813e74caf9c',
      flow: [
        {
          id: 'b032cba2.69981',
          type: 'tab',
          name: 'Sample flow',
        },
        {
          id: 'f7ae7ff1.f3f3f',
          type: 'device in',
          z: 'b032cba2.69981',
          name: 'device',
          device: '{"id":"d4c8f5"}',
          status: 'false',
          _device_id: 'd4c8f5',
          _device_label: '',
          _device_type: '',
          x: 102.5,
          y: 164,
          wires: [
            [
              'd4d0b51f.60b0b',
            ],
          ],
        },
        {
          id: 'd4d0b51f.60b0b',
          type: 'switch',
          z: 'b032cba2.69981',
          name: '',
          property: 'payload',
          propertyType: 'msg',
          rules: [
            {
              t: 'eq',
              v: '',
              vt: 'str',
            },
          ],
          checkall: 'true',
          outputs: 1,
          x: 308,
          y: 196,
          wires: [
            'ad106680.4d93e8',
          ],
        },
        {
          id: 'ad106680.4d93e8',
          type: 'change',
          z: 'b032cba2.69981',
          name: '',
          rules: [
            {
              t: 'set',
              p: 'payload',
              pt: 'msg',
              to: '',
              tot: 'str',
            },
          ],
          action: '',
          property: '',
          from: '',
          to: '',
          reg: false,
          x: 434,
          y: 263,
          wires: [],
        },
      ],
      created: 1542987517631,
      updated: 1542987517631,
    },
  ],
};

module.exports = flow;
