BlockEvents.modification(e => {
    e.modify('botania:livingrock', block => {
      block.requiresTool = false
    })
    e.modify('botania:apothecary_default', block => {
      block.requiresTool = false
    })
    e.modify('minecraft:respawn_anchor', block => {
      block.requiresTool = false
    })
    //This shit made everything mineable with your hands
    //e.modify({mod: 'abyssal_decor'}, block => {
      //block.requiresTool = false
    //})
    //.modify({mod: 'architects_palette'}, block => {
      //block.requiresTool = false
    //})
  })