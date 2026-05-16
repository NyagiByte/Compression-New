
ItemEvents.modification(event => {
  event.modify('constructionwand:iron_wand', item => {
    item.maxDamage = 8192
  })
})