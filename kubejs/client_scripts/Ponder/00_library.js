const Minecraft = Java.loadClass("net.minecraft.client.Minecraft");
/* This is a library file. Here go functions that can be used across multiple categories.
Unlike the normal ponder scrips, these really should be well documented.
Functions here are defined as globals, meaning they can be called from any other ponder script, as long as they're called from global.
Example: const stand = global.spawnPlayer(scene, [2.5, 1.5, 2.5], 135) */

/* Spawns a burst of smoke and a player-looking armour stand.
scene is the scene object, pos is a [x,y,z], rot is a float.
It requires a player name and a texture b64 link. Those are usually supplied by spawnPlayer*/
global.spawnPlayerBase = function(scene, pos, rot, name, texture){
    //Spawn the initial puff of smoke
    for(let i = 0;i<100;i++){
                scene.particles.simple(1, "smoke", [pos[0], pos[1]+0.5, pos[2]]).density(5).motion([Math.random()/5-0.1, Math.random()/2-0.1, Math.random()/5-0.1]);
    }
    
    //And so, we create the head as a kubejs item to give it to the armour stand.
    const head = Item.of("minecraft:player_head")
    head.setNbt({
                SkullOwner: {
                    Name: name, //If this is missing, a steve will render instead.
                    Properties: {
                        textures: [{
                            Value: texture //If this is missing, whichever default skin is assigned to that player will render instead.
                        }]}
                },
                Enchantments:[{ //Quark makes curse of binding on player heads render the full model when put on an armour stand.
                        lvl: 1,
                        id: "minecraft:binding_curse"
                    }]
            })
            
     var tag = `{Pos: [${pos[0]}d, ${pos[1]}d, ${pos[2]}d], Rotation: [${rot}f, 0.0f],Pose:{LeftArm:[0f,0f,355f],RightArm:[0f,0f,5f]}}`
     const stand = scene.world.createEntity("minecraft:armor_stand", [pos[0], pos[1], pos[2]], s => {
                s.load(tag)
                s.setNoBasePlate(true)
                //DO NOT TRY TO SET THE ITEM SLOT HERE. THE NBT WILL GET WIPED.
            })
    scene.world.modifyEntity(stand, s => {
        //and yet, doing that immediately after is fine. Fun, right?
        s.setItemSlot("head", head) 
    })
    return stand //Need to return the created entity in order to be able to despawn it later.
}

//Spawns a dummy with the skin of the currently watching player.
global.spawnPlayer = function(scene, pos, rot){
    //To put a player head on an armour stand, we need the player name, and the texture field that would be on the actual item.
    const player = Minecraft.getInstance().getUser();
    const texProperty = Minecraft.getInstance().getConnection().getLocalGameProfile().getProperties().get("textures").iterator().next() //This is a weird superposition of "An array" and also "Not an array". Don't question it too much.
    return global.spawnPlayerBase(scene, pos, rot, player.getName(), texProperty.getValue())
}

/*An example of spawning a player dummy with a specific user's skin. In this case, Nyagi
To retrieve the texture data: It is part of the player head's nbt. Put a named snow golem near a witch to get the player head, then do /kubejs hand while holding it.
(Might need to place it down first)
Then, search for "Value:" and copy the long b64 string next to it. That is your textures field. */
global.spawnNyagi = function(scene, pos, rot){
    //That texture thing looks scary, but it's just base 64 encoding for https://textures.minecraft.net/texture/someid + some metadata, like uuid or model type.
    //It is not a puzzle piece, trust me.
    return global.spawnPlayerBase(scene, pos, rot, "Nyagi", "ewogICJ0aW1lc3RhbXAiIDogMTc5MDUzNDk3ODU2MiwKICAicHJvZmlsZUlkIiA6ICI1YzlkYjQzNDRkMTg0OTVmYmU0NjhiMzljMDBiNjg1ZiIsCiAgInByb2ZpbGVOYW1lIiA6ICJOeWFnaSIsCiAgInNpZ25hdHVyZVJlcXVpcmVkIiA6IHRydWUsCiAgInRleHR1cmVzIiA6IHsKICAgICJTS0lOIiA6IHsKICAgICAgInVybCIgOiAiaHR0cDovL3RleHR1cmVzLm1pbmVjcmFmdC5uZXQvdGV4dHVyZS9kN2VlNzkyZmZiYzI2YTJlYTQzNmFkODNiYTdiM2QxMmVlY2JiYWU2ODQzZmE4Y2EyMDk2MDAzOWIxMGY2MjA3IiwKICAgICAgIm1ldGFkYXRhIiA6IHsKICAgICAgICAibW9kZWwiIDogInNsaW0iCiAgICAgIH0KICAgIH0KICB9Cn0=")
}

//Spawn a puff of smoke and despawn the fake player. Unfortunately, the position must be passed to it, as it can't be retrieved easily.
global.despawnPlayer = function(scene, e, pos){
    //Same as above, big puff of smoke
    for(let i = 0;i<100;i++){
        scene.particles.simple(1, "smoke", [pos[0], pos[1]+0.5, pos[2]]).density(5).motion([Math.random()/5-0.1, Math.random()/2-0.1, Math.random()/5-0.1]);
    }
    scene.world.modifyEntity(e, (s => s.discard()))
}