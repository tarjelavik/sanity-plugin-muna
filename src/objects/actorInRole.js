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
          to: [{type: 'typeClass'}],
          options: {
            filter: 'references(*[_type == "systemCategory" && label.nor in [$sysCat]]._id)',
            filterParams: {sysCat: 'Rolle'}
          }
        }
      ]
    }
  ],
  preview: {
    select: {
      actor: 'actor.label',
      role: 'role'
    },
    prepare (selection) {
      const {actor, role} = selection
      return {
        title: actor + ', ' + role
      }
    }
  }
}
