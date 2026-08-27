// Listen to item tag event
ServerEvents.tags('block', event => {

  // Get tag collection and remove an item from it
  event.remove('minecraft:needs_stone_tool', 'spelunkery:granite_lead_ore')
  event.remove('minecraft:needs_stone_tool', 'spelunkery:diorite_lead_ore')
  event.remove('minecraft:needs_stone_tool', 'spelunkery:andesite_lead_ore')
  event.remove('minecraft:needs_stone_tool', 'spelunkery:tuff_lead_ore')
  event.remove('minecraft:needs_iron_tool', 'spelunkery:granite_silver_ore')
  event.remove('minecraft:needs_iron_tool', 'spelunkery:diorite_silver_ore')
  event.remove('minecraft:needs_iron_tool', 'spelunkery:andesite_silver_ore')
  event.remove('minecraft:needs_iron_tool', 'spelunkery:tuff_silver_ore')
  event.remove('minecraft:needs_iron_tool', 'spelunkery:granite_jade_ore')
  event.remove('minecraft:needs_iron_tool', 'spelunkery:diorite_jade_ore')
  event.remove('minecraft:needs_iron_tool', 'spelunkery:andesite_jade_ore')
  event.remove('minecraft:needs_iron_tool', 'spelunkery:tuff_jade_ore')
  event.remove('minecraft:needs_iron_tool', 'spelunkery:granite_zinc_ore')
  event.remove('minecraft:needs_iron_tool', 'spelunkery:diorite_zinc_ore')
  event.remove('minecraft:needs_iron_tool', 'spelunkery:andesite_zinc_ore')
  event.remove('minecraft:needs_iron_tool', 'spelunkery:tuff_zinc_ore')

})