const flow = {
  message: 'ok',
  flow: {
    name: 'Flow',
    enabled: true,
    id: '2a259f5c-0bda-4cf4-8ae1-f00756d5105e',
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
    created: 1543318850887,
    updated: 1543318850887,
  },
};

module.exports = flow;
