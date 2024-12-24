export default {
    name: 'pet',
    type: 'document',
    title: 'Pet',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Pet Nameeeeeeee'
        },
        {
            name: 'description',
            type: 'string',
            title: 'Description'
        },
        {
            name: "image",
            type: "image",
            title: "Image",
            options: {
                hotspot: true // Enables the hotspot selection for cropping
            }
        }
    ]
}