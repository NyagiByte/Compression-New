/*
This script calls the loaded registries and prints out a json suitable for an entity_type tag
It contains every registered entity, except the player.
Should there be mod changes that add/remove entities, uncomment the script, reload client scripts in game, and paste the output under
/config/paxi/datapacks/compression/data/spelunkery/tags/entity_types/portal_fluid_immune.json
*/

/*
const REG = Java.loadClass("net.minecraftforge.registries.ForgeRegistries") 

let list = {
  "replace": true,
  "values": [
    
  ]
}

    REG.ENTITY_TYPES.forEach((entry) => {
        let id = entry.builtInRegistryHolder().key().location().toString()
        if(id != "minecraft:player") list["values"].push(id)
    })
    console.log(list)
*/
