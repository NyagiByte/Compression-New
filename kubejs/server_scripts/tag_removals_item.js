// Listen to item tag event
ServerEvents.tags('item', event => {

  // Get tag collection and remove an item from it
  event.remove('forge:ores/silver', 'spelunkery:granite_silver_ore')
  event.remove('forge:ores/silver', 'spelunkery:diorite_silver_ore')
  event.remove('forge:ores/silver', 'spelunkery:andesite_silver_ore')
  event.remove('forge:ores/silver', 'spelunkery:tuff_silver_ore')
  event.remove('forge:ores/lead', 'spelunkery:granite_lead_ore')
  event.remove('forge:ores/lead', 'spelunkery:diorite_lead_ore')
  event.remove('forge:ores/lead', 'spelunkery:andesite_lead_ore')
  event.remove('forge:ores/lead', 'spelunkery:tuff_lead_ore')
  event.remove('forge:ores/zinc', 'spelunkery:granite_zinc_ore')
  event.remove('forge:ores/zinc', 'spelunkery:diorite_zinc_ore')
  event.remove('forge:ores/zinc', 'spelunkery:andesite_zinc_ore')
  event.remove('forge:ores/zinc', 'spelunkery:tuff_zinc_ore')
  event.remove('forge:lead_ores', 'spelunkery:granite_lead_ore')
  event.remove('forge:lead_ores', 'spelunkery:diorite_lead_ore')
  event.remove('forge:lead_ores', 'spelunkery:andesite_lead_ore')
  event.remove('forge:lead_ores', 'spelunkery:tuff_lead_ore')
  event.remove('spelunkery:silver_ores', 'spelunkery:granite_silver_ore')
  event.remove('spelunkery:silver_ores', 'spelunkery:diorite_silver_ore')
  event.remove('spelunkery:silver_ores', 'spelunkery:andesite_silver_ore')
  event.remove('spelunkery:silver_ores', 'spelunkery:tuff_silver_ore')

  // Get tag and remove all entries from it
  event.removeAll('spelunkery:jade_ores')

})