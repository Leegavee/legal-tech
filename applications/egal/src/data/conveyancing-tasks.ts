export const tasks = {
  Workflow: {
    '1': {
      name: 'Instruction',
      tasks: [
        {
          name: 'Initial instructions received from client',
          description:
            'The solicitor receives initial instructions from the client, including details of the property being purchased or sold.',
        },
        {
          name: 'Client care and money laundering checks',
          description:
            'The solicitor carries out client care and money laundering checks to verify the identity of the client and ensure compliance with regulatory requirements.',
        },
        {
          name: 'Pre-contract searches and enquiries',
          description:
            'The solicitor carries out searches and enquiries to obtain information about the property, such as title deeds, planning permissions, and environmental reports.',
        },
      ],
    },
    '2': {
      name: 'Pre-Exchange',
      tasks: [
        {
          name: 'Draft contract',
          description:
            'The solicitor drafts a contract setting out the terms of the purchase or sale.',
        },
        {
          name: 'Exchange of contracts',
          description:
            'The buyer and seller exchange signed copies of the contract, along with a deposit paid by the buyer.',
        },
        {
          name: 'Completion statement',
          description:
            'The solicitor prepares a completion statement, detailing the amount due on completion and any outstanding fees.',
        },
        {
          name: 'Transfer deed',
          description:
            'The solicitor prepares a transfer deed, which transfers ownership of the property to the buyer.',
        },
      ],
    },
    '3': {
      name: 'Post-Exchange',
      tasks: [
        {
          name: 'Mortgage offer and report',
          description:
            "The buyer's lender issues a mortgage offer and report, which sets out the terms of the loan and any conditions attached.",
        },
        {
          name: 'Stamp duty land tax',
          description:
            'The solicitor calculates the amount of stamp duty land tax payable by the buyer and submits the payment to HM Revenue & Customs.',
        },
        {
          name: 'Land registry application',
          description:
            'The solicitor prepares and submits an application to the Land Registry to register the transfer of ownership.',
        },
      ],
    },
    '4': {
      name: 'Completion',
      tasks: [
        {
          name: 'Completion day',
          description:
            "On the day of completion, the buyer's solicitor sends the purchase price to the seller's solicitor, and the seller vacates the property.",
        },
        {
          name: 'Completion confirmation',
          description:
            'The solicitor confirms completion to all parties involved and releases the keys to the buyer.',
        },
        {
          name: 'Post-completion matters',
          description:
            "The solicitor deals with any post-completion matters, such as registering the buyer's mortgage and transferring utilities.",
        },
      ],
    },
  },
};
