export default {
  title: 'Actor in role as',
  name: 'actorInRole',
  type: 'object',
  fields: [
    {
      name: 'actor',
      title: 'Aktør',
      titleEN: 'Actor',
      type: 'reference',
      to: [{type: 'actor', title: 'Actor'}]
    },
    {
      name: 'role',
      title: 'Rolle',
      titleEN: 'Role',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'role'}],
        }
      ]
    }
  ],
  preview: {
    select: {
      actor: 'actor.label',
      role: 'role.0.label.nor'
    },
    prepare (selection) {
      const {actor, role} = selection
      return {
        title: actor,
        subtitle: `${role ? role : ''}`
      }
    }
  }
}
