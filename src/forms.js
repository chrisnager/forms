export default [
  {
    form: 'High',
    head: {
      fields: [
        {
          name: 'high-head-first',
          label: 'High head first LABEL',
          placeholder: 'High head first PLACEHOLDER',
        },
        {
          name: 'high-head-second',
          label: 'High head second LABEL',
          placeholder: 'High head second PLACEHOLDER',
        },
        {
          name: 'high-head-third',
          label: 'High head third LABEL',
          placeholder: 'High head third PLACEHOLDER',
        },
        {
          name: 'high-head-fourth',
          label: 'High head fourth LABEL',
          placeholder: 'High head fourth PLACEHOLDER',
        },
      ],
    },
    body: [
      {
        fields: [
          {
            name: 'high-1-first',
            placeholder: 'High first',
          },
          {
            name: 'high-1-second',
            placeholder: 'High second',
          },
          {
            name: 'high-1-third',
            placeholder: 'High third',
          },
          {
            name: 'high-1-fourth',
            placeholder: 'High fourth',
          },
        ],
        initialValues: {
          'high-1-first': 'sure thing',
          'high-1-fourth': 'ok',
        },
      },
      {
        fields: [
          {
            name: 'high-2-first',
            placeholder: 'High first',
          },
          {
            name: 'high-2-second',
            placeholder: 'High second',
          },
          {
            name: 'high-2-third',
            placeholder: 'High third',
          },
          {
            name: 'high-2-fourth',
            placeholder: 'High fourth',
          },
        ],
        initialValues: {
          'high-2-first': 'hmmm',
          'high-2-fourth': 'yep',
        },
      },
      {
        fields: [
          {
            name: 'high-3-first',
            placeholder: 'High first',
          },
          {
            name: 'high-3-second',
            placeholder: 'High second',
          },
          {
            name: 'high-3-third',
            placeholder: 'High third',
          },
          {
            name: 'high-3-fourth',
            placeholder: 'High fourth',
          },
        ],
        initialValues: {
          'high-3-first': 'yox3',
          'high-3-fourth': 'nerp',
        },
      },
    ],
  },
  {
    form: 'Mid',
    head: {
      fields: [
        {
          name: 'mid-head-first',
          label: 'Mid head first LABEL',
          placeholder: 'Mid head first PLACEHOLDER',
        },
        {
          name: 'mid-head-second',
          label: 'Mid head second LABEL',
          placeholder: 'Mid head second PLACEHOLDER',
        },
        {
          name: 'mid-head-third',
          label: 'Mid head third LABEL',
          placeholder: 'Mid head third PLACEHOLDER',
        },
      ],
    },
    body: [
      {
        fields: [
          {
            name: 'mid-first',
            placeholder: 'Mid first',
          },
          {
            name: 'mid-second',
            placeholder: 'Mid second',
          },
          {
            name: 'mid-third',
            placeholder: 'Mid third',
          },
        ],
        initialValues: {
          'mid-first': 'yox3',
        },
      },
    ],
  },
  {
    form: 'Low',
    body: [
      {
        fields: [
          {
            name: 'low-first',
            placeholder: 'Low first',
          },
          {
            name: 'low-second',
            placeholder: 'Low second',
          },
        ],
        initialValues: {
          'low-first': 'YOX3',
        },
      },
    ],
  },
]