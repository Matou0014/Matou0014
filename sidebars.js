module.exports = {
    index: [
        {
            type: 'doc',
            id: 'index',
        },
        {
            type: 'category',
            label: 'Hobby',
            collapsed: true,
            link: {
                type: 'doc',
                id: 'hobby/hobby',
            },
            items: [
                'hobby/inventory',
                'hobby/projects',
            ]
        },
    ],
};
