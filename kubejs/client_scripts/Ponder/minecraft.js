const MC = Java.loadClass("net.minecraft.client.Minecraft")


Ponder.tags((e) => {
	e.createTag("compression:minecraft", "minecraft:crafting_table", "Minecraft Basics.", "The Basics of Basics!", [
		"minecraft:cobblestone",
		"minecraft:glass",
		"minecraft:oak_log",
		"minecraft:stone",
		"minecraft:basalt",
		"minecraft:respawn_anchor",
	]);
});
//------------------------------------------------------------------
Ponder.registry((e) => {
//------------------------------------------------------------------
    //Jay's Silly Ponders
    //Glass
        e.create("minecraft:glass").scene("Glass", "Blasted Sand", (scene, util) => {
            scene.showBasePlate();
            scene.idle(5);
            scene.world.setBlock([2,1,2], "minecraft:glass", false);
            scene.world.showSection([2,1,2], Facing.down);
            scene.idle(10);
            scene.text(80, "You can see through this...", [2.5,1,2.5]);
            scene.idle(20);
        });
    //Logs
        e.create("minecraft:oak_log").scene("Logs", "What did you expect?", (scene, util) => {
            scene.showBasePlate();
            scene.idle(5);
            scene.world.setBlock([2,1,2], "minecraft:oak_log", false);
            scene.world.showSection([2,1,2], Facing.down);
            scene.idle(10);
            scene.text(40, "Why did you ponder this?", [2.5,1,2.5]);
            scene.idle(50);
            scene.text(40, "Logs come from trees...", [2.5,1,2.5]);
            scene.idle(40);
        });
//------------------------------------------------------------------
	//Cobblestone
    e.create("minecraft:cobblestone") //creates scene for the item
        .scene("Cobblestone_Generator", "I want more cobble!", "kubejs:botania_7x7",(scene, util) => {
            scene.showBasePlate();
            scene.idle(20);
            scene.text(80, "Upon gathering some materials, you might want to think of making a Cobblestone Generator.");
        	scene.idle(70);
        	scene.addKeyframe();
        	//first layer of the cobble gen-----------------------------------
            scene.world.setBlock([3,1,2], "botania:mana_glass", false);
            scene.world.showSection([3,1,2], Facing.down);
        	scene.world.setBlock([4,1,3], "botania:mana_glass", false);
        	scene.world.showSection([4,1,3], Facing.down);
        	scene.world.setBlock([3,1,4], "botania:mana_glass", false);
        	scene.world.showSection([3,1,4], Facing.down);
        	scene.world.setBlock([2,1,3], "botania:mana_glass", false);
        	scene.world.showSection([2,1,3], Facing.down);
        	scene.world.setBlock([1,1,3], "botania:mana_glass", false);
        	scene.world.showSection([1,1,3], Facing.down);
        	scene.idle(10);
        	//second layer and i already want to fucking die
        	scene.world.setBlock([5,2,3], "botania:mana_glass", false);
        	scene.world.showSection([5,2,3], Facing.down);
        	scene.world.setBlock([4,2,2], "botania:mana_glass", false);
        	scene.world.showSection([4,2,2], Facing.down);
        	scene.world.setBlock([4,2,4], "botania:mana_glass", false);
        	scene.world.showSection([4,2,4], Facing.down);
        	scene.world.setBlock([3,2,2], "botania:mana_glass", false);
        	scene.world.showSection([3,2,2], Facing.down);
        	scene.world.setBlock([1,2,2], "botania:mana_glass", false);
        	scene.world.showSection([1,2,2], Facing.down);
        	scene.world.setBlock([3,2,4], "botania:mana_glass", false);
        	scene.world.showSection([3,2,4], Facing.down);
        	scene.world.setBlock([1,2,4], "botania:mana_glass", false);
        	scene.world.showSection([1,2,4], Facing.down);
        	scene.world.setBlock([0,2,3], "botania:mana_glass", false);
        	scene.world.showSection([0,2,3], Facing.down);
        	scene.idle(10);
        	//how do i make liquid "flow" in fucking ponders
        	scene.showControls(30, [4.5,3,3.5], "down")
                .rightClick()
        		.withItem("water_bucket")
        	scene.world.showSection([3,2,3], Facing.down);
        	scene.world.showSection([3,1,3], Facing.down);
        	scene.idle(20);
        	scene.world.setBlock([4,2,3], "minecraft:water", false);
        	scene.world.showSection([4,2,3], Facing.down);
        	scene.idle(20);
        	scene.idle(5);
        	//here comes the flowing water
        	scene.world.setBlock([3,2,3], "minecraft:water", false);
        	scene.world.modifyBlock([3,2,3], (water) => water.with("level", "3"), false)
        	scene.idle(5);
        	//the other water
        	scene.world.setBlock([3,1,3], "minecraft:water", false);
        	scene.idle(10);
        	//and here comes the lava
        	scene.showControls(30, [1.5,3,3.5], "down")
                .rightClick()
        		.withItem("lava_bucket")
        	scene.world.showSection([2,2,3], Facing.down);
        	scene.idle(20);
        	scene.world.setBlock([1,2,3], "minecraft:lava", false);
        	scene.world.showSection([1,2,3], Facing.down);
        	scene.idle(40);
        	//AH FUCK ME I NOW I GOTTA MAKE SMOKE PARTICLES FOR THE COBBLE GENERATOR AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
        	scene.world.setBlock([2,2,3], "minecraft:cobblestone", true);
        	for(let i = 0; i<5;i++){
        		scene.particles.simple(2, "large_smoke", [Math.random()+2,3,Math.random()+3]).density(1);  //first variable is how long it goes for
        	}
        	scene.idle(40);
        	scene.addKeyframe();
        	scene.text(80, "A Cobblestone Generator works by infinitely flowing lava into contacting water, generating cobblestone as a result.");
        	scene.idle(90);
        	scene.text(50, "If you break the cobbblestone block...", [2.5,2.5,3.5]);
        	scene.idle(60);
        	scene.world.setBlock([2,2,3], "minecraft:air", true);
        	scene.idle(30);
        	scene.world.setBlock([2,2,3], "minecraft:cobblestone", true);
        	for(let i = 0; i<5;i++){
        		scene.particles.simple(2, "large_smoke", [Math.random()+2,3,Math.random()+3]).density(1);  //first variable is how long it goes for
        	}
        	scene.idle(10);
        	scene.text(60, "...another one will take its place.", [2.5,2.5,3.5]);
        	scene.idle(70);
        	scene.addKeyframe();
        	scene.text(80, "It's important to limit the water flow so it doesn't reach the lava source.", [3.5,1.5,3.5]);
        	scene.idle(90);
        	scene.text(80, "If you're not careful, your lava will become Obsidian, thus ruining your Cobblestone Generator.", [1.5,2.5,3.5]);
        	scene.idle(90);
        	scene.addKeyframe();
        	scene.text(80, "The process is very simple, but it can become very monotonous to break cobblestone by hand...");
        	scene.idle(90);
        	scene.text(80, "You might want to find a more §ccreative§r solution to this problem...");
        	scene.idle(30);
        });
	//Stone-------------------------------------------------------------------------------------
	e.create("minecraft:stone")
        .scene("stone_generator", "A Stone Generator?", "kubejs:botania_7x7",(scene, util) => {
            scene.showBasePlate();
            scene.idle(20);
            scene.text(70, "Although more intricate, you may also want to build a Stone Generator.");
            scene.idle(80);
    		scene.addKeyframe();
			//first layer of the gen----------------------------
			scene.world.setBlock([3,1,2], "botania:mana_glass", false);
			scene.world.showSection([3,1,2], Facing.down);
			scene.world.setBlock([4,1,3], "botania:mana_glass", false);
			scene.world.showSection([4,1,3], Facing.down);
			scene.world.setBlock([3,1,4], "botania:mana_glass", false);
			scene.world.showSection([3,1,4], Facing.down);
			scene.world.setBlock([2,1,3], "botania:mana_glass", false);
			scene.world.showSection([2,1,3], Facing.down);
			scene.idle(10);
			//second layer of the gen---------------------------
			scene.world.setBlock([5,2,3], "botania:mana_glass", false);
			scene.world.showSection([5,2,3], Facing.down);
			scene.world.setBlock([4,2,2], "botania:mana_glass", false);
			scene.world.showSection([4,2,2], Facing.down);
			scene.world.setBlock([4,2,4], "botania:mana_glass", false);
			scene.world.showSection([4,2,4], Facing.down);
			scene.idle(10);
			//third layer of the gen lmao it's a copy paste from layer 1
			scene.world.setBlock([3,3,2], "botania:mana_glass", false);
			scene.world.showSection([3,3,2], Facing.down);
			scene.world.setBlock([4,3,3], "botania:mana_glass", false);
			scene.world.showSection([4,3,3], Facing.down);
			scene.world.setBlock([3,3,4], "botania:mana_glass", false);
			scene.world.showSection([3,3,4], Facing.down);
			scene.world.setBlock([2,3,3], "botania:mana_glass", false);
			scene.world.showSection([2,3,3], Facing.down);
			scene.idle(10);
			//time to ADD WATER AGAIN YIPEEEEEEE
			scene.showControls(30, [4.5,3,3.5], "down")
                .rightClick()
				.withItem("water_bucket")
			scene.world.showSection([3,2,3], Facing.down);
			scene.world.showSection([3,1,3], Facing.down);
			scene.idle(20);
			scene.world.setBlock([4,2,3], "minecraft:water", false);
			scene.world.showSection([4,2,3], Facing.down);
			scene.idle(20);
			scene.idle(5);
			//water flow part 1
			scene.world.setBlock([3,2,3], "minecraft:water", false);
			scene.world.modifyBlock([3,2,3], (water) => water.with("level", "2"), false)
			scene.idle(5);
			//water flow part 2
			scene.world.setBlock([3,1,3], "minecraft:water", false);
			scene.idle(10);
			//lava time
			scene.showControls(30, [3.5,4,3.5], "down")
                .rightClick()
				.withItem("lava_bucket")
			scene.idle(20);
			scene.world.setBlock([3,3,3], "minecraft:lava", false);
			scene.world.showSection([3,3,3], Facing.down);
			scene.idle(40);
			//stone.
			scene.world.setBlock([3,2,3], "minecraft:stone", true);
			for(let i = 0; i<5;i++){
				scene.particles.simple(2, "large_smoke", [Math.random()+3,3,Math.random()+3]).density(1);  //first variable is how long it goes for
			}
			scene.idle(5);
			scene.world.setBlock([3,1,3], "minecraft:air", true);
			scene.idle(20);
			scene.addKeyframe();
			//time to explain to these normies how this one works
			scene.text(60, "While a Cobblestone Generator works by flowing lava next to water...");
    		scene.idle(70);
			scene.world.setBlock([3,2,3], "minecraft:air", true);
			scene.idle(5);
			scene.world.setBlock([3,2,3], "minecraft:water", false);
			scene.world.modifyBlock([3,2,3], (water) => water.with("level", "2"), false)
			scene.idle(5);
			scene.world.setBlock([3,1,3], "minecraft:water", false);
			scene.idle(10);
			scene.text(80, "A Stone Generator works by flowing lava ON TOP of water.", [3.5,2.5,3.5]);
			scene.idle(60);
			scene.world.setBlock([3,2,3], "minecraft:stone", true);
			for(let i = 0; i<5;i++){
				scene.particles.simple(2, "large_smoke", [Math.random()+3,3,Math.random()+3]).density(1);  //first variable is how long it goes for
			}
			scene.idle(5);
			scene.world.setBlock([3,1,3], "minecraft:air", true);
			scene.idle(45);
			scene.addKeyframe();
			scene.text(80, "Something else to note is that, once placed, lava doesn't flow upon neccesity. It ALWAYS tries to flow whenever possible.");
			scene.idle(90);
			scene.text(60, "This is known as the \"Global Timer\".");
			scene.idle(70);
			scene.text(60, "\"Why is this important?\" you may ask.");
			scene.idle(70);
			scene.text(80, "If you break the stone block at the wrong time...");
			scene.idle(60);
			scene.world.setBlock([3,2,3], "minecraft:air", true);
			scene.idle(30);
			scene.world.setBlock([3,2,3], "minecraft:lava", false);
			scene.world.modifyBlock([3,2,3], (lava) => lava.with("level", "1"), false)
			scene.text(60, "...lava will flow BEFORE the water...", [3.5,2.5,3.5]);
			scene.idle(70);
			scene.world.setBlock([3,2,3], "minecraft:cobblestone", true);
			for(let i = 0; i<5;i++){
				scene.particles.simple(2, "large_smoke", [Math.random()+3,3,Math.random()+3]).density(1);  //first variable is how long it goes for
			}
			scene.idle(20);
			scene.text(80, "...resulting in the creation of cobblestone instead.");
			scene.idle(100);
			scene.text(80, "Oh, and stone can be mined faster than cobblestone.\n§cDo keep this in mind.§r");
			scene.idle(70);
			scene.markAsFinished();
        });
	//Basalt-------------------------------------------------------
    e.create("minecraft:basalt")
		.scene("basalt_generator", "Wait, you can make basalt?", "kubejs:botania_7x7",(scene, util) => {
			scene.showBasePlate();
			scene.idle(20);
			scene.text(70, "Another neat function of vanilla minecraft is the Basalt Generator!");
			scene.idle(80);
			scene.addKeyframe();
			//alright ramblers lets get rambling--------------------
			scene.world.setBlock([3,1,3], "minecraft:soul_soil", false);
			scene.world.showSection([3,1,3], Facing.down);
			scene.world.setBlock([4,1,3], "botania:mana_glass", false);
			scene.world.showSection([4,1,3], Facing.down);
			scene.idle(10);
			scene.world.setBlock([4,2,2], "botania:mana_glass", false);
			scene.world.showSection([4,2,2], Facing.down);
			scene.world.setBlock([4,2,4], "botania:mana_glass", false);
			scene.world.showSection([4,2,4], Facing.down);
			scene.world.setBlock([5,2,3], "botania:mana_glass", false);
			scene.world.showSection([5,2,3], Facing.down);
    		scene.idle(10);
			scene.world.setBlock([2,2,3], "minecraft:blue_ice", false);
			scene.world.showSection([2,2,3], Facing.down);
			scene.idle(20);
			scene.showControls(30, [4.5,3,3.5], "down")
                .rightClick()
				.withItem("lava_bucket")
			scene.idle(20);
			scene.world.showSection([3,2,3], Facing.down);
			scene.world.setBlock([4,2,3], "minecraft:lava", false);
			scene.world.showSection([4,2,3], Facing.down);
			scene.idle(40);
			scene.world.setBlock([3,2,3], "minecraft:basalt", false);
			for(let i = 0; i<5;i++){
				scene.particles.simple(2, "large_smoke", [Math.random()+3,3,Math.random()+3]).density(1);  //first variable is how long it goes for
			}
			scene.idle(20);
			scene.addKeyframe();
			scene.text(60, "This generator works under some special conditions:");
			scene.idle(70);
			scene.world.setBlock([3,2,3], "minecraft:air", true);
			scene.idle(30);
			scene.world.setBlock([3,2,3], "minecraft:lava", false);
			scene.world.modifyBlock([3,2,3], (lava) => lava.with("level", "1"), false)
			scene.idle(20);
			scene.text(60, "Condition 1: Soul Soil must be present beneath lava.", [3.5,1,3.5]);
			scene.idle(70);
			scene.text(60, "Condition 2: Blue Ice must be adjacent to lava.", [2.5,2,3.5]);
			scene.idle(70);
			scene.text(60, "If both conditions are met...");
			scene.idle(70);
			scene.world.setBlock([3,2,3], "minecraft:basalt", false);
			for(let i = 0; i<5;i++){
				scene.particles.simple(2, "large_smoke", [Math.random()+3,3,Math.random()+3]).density(1);  //first variable is how long it goes for
			}
			scene.idle(20);
			scene.text(60, "...basalt will be generated!", [3.5,2,3.5]);
			scene.idle(50);
			scene.markAsFinished();
        });
    //Respawn Anchor--------------------------------------------------
    e.create("minecraft:respawn_anchor")
		.scene("respawn_anchor", "What are beds for anyway?", "kubejs:botania_7x7", (scene, util) => {
            scene.showBasePlate();
            scene.idle(5);
            scene.world.setBlock([3,1,3], "minecraft:respawn_anchor", false);
            scene.world.showSection([3,1,3], Facing.down);
            scene.idle(10);
            scene.text(70, "This is a Respawn Anchor. It allows you to set your respawn point.", [3.5,2,3.5]);
            scene.idle(80);
			scene.text(70, "To use it, simply right click it with a block of glowstone.");
			scene.idle(30);
			scene.showControls(20, [3.5,2,3.5], "down")
                .rightClick()
				.withItem("glowstone")
			scene.idle(30);
			scene.world.modifyBlock([3,1,3], (anchor) => anchor.with("charges", "1"), false)
			for(let i = 0; i<8;i++){
				scene.particles.simple(1, "reverse_portal", [Math.random()+3,2,Math.random()+3]).density(1).motion([0, 0.05, 0]);
				scene.idle(5);
			}
			scene.addKeyframe();
			scene.text(70, "In total, it'll hold 4 charges, meaning 4 glowstone blocks.");
			for(let i = 0; i<20;i++){
				scene.particles.simple(1, "reverse_portal", [Math.random()+3,2,Math.random()+3]).density(1).motion([0, 0.05, 0]);
				scene.idle(5);
			}
			scene.showControls(80, [3.5,2,3.5], "down")
                .rightClick()
				.withItem("glowstone")
			for(let i = 0; i<4;i++){
				scene.particles.simple(1, "reverse_portal", [Math.random()+3,2,Math.random()+3]).density(1).motion([0, 0.05, 0]);
				scene.idle(5);
			}
			scene.world.modifyBlock([3,1,3], (anchor) => anchor.with("charges", "2"), false)
			for(let i = 0; i<4;i++){
				scene.particles.simple(1, "reverse_portal", [Math.random()+3,2,Math.random()+3]).density(1).motion([0, 0.05, 0]);
				scene.idle(5);
			}
			scene.world.modifyBlock([3,1,3], (anchor) => anchor.with("charges", "3"), false)
			for(let i = 0; i<4;i++){
				scene.particles.simple(1, "reverse_portal", [Math.random()+3,2,Math.random()+3]).density(1).motion([0, 0.05, 0]);
				scene.idle(5);
			}
			scene.world.modifyBlock([3,1,3], (anchor) => anchor.with("charges", "4"), false)
			for(let i = 0; i<4;i++){
				scene.particles.simple(1, "reverse_portal", [Math.random()+3,2,Math.random()+3]).density(1).motion([0, 0.05, 0]);
				scene.idle(5);
			}
			scene.addKeyframe();
			scene.text(70, "Upon respawn, the Respawn anchor will lose one charge.");
			for(let i = 0; i<16;i++){
				scene.particles.simple(1, "reverse_portal", [Math.random()+3,2,Math.random()+3]).density(1).motion([0, 0.05, 0]);
				scene.idle(5);
			}
			scene.world.modifyBlock([3,1,3], (anchor) => anchor.with("charges", "3"), false)
			scene.text(70, "You can see how many charges remain in this here circle.", [3.5,1.7,3]);
			for(let i = 0; i<16;i++){
				scene.particles.simple(1, "reverse_portal", [Math.random()+3,2,Math.random()+3]).density(1).motion([0, 0.05, 0]);
				scene.idle(5);
			}
			scene.addKeyframe();
			scene.text(70, "You can add glowstone autonomously via a dispenser facing the Respawn Anchor.")
			for(let i = 0; i<10;i++){
				scene.particles.simple(1, "reverse_portal", [Math.random()+3,2,Math.random()+3]).density(1).motion([0, 0.05, 0]);
				scene.idle(5);
			}
			scene.world.setBlock([3,1,4], "minecraft:dispenser", false);
            scene.world.showSection([3,1,4], Facing.down);
			for(let i = 0; i<4;i++){
				scene.particles.simple(1, "reverse_portal", [Math.random()+3,2,Math.random()+3]).density(1).motion([0, 0.05, 0]);
				scene.idle(5);
			}
			scene.world.modifyBlock([3,1,3], (anchor) => anchor.with("charges", "4"), false)
			for(let i = 0; i<6;i++){
				scene.particles.simple(1, "reverse_portal", [Math.random()+3,2,Math.random()+3]).density(1).motion([0, 0.05, 0]);
				scene.idle(5);
			}
			scene.text(70, "And you may either use a comparator to calculate how many uses the Anchor has...")
			for(let i = 0; i<10;i++){
				scene.particles.simple(1, "reverse_portal", [Math.random()+3,2,Math.random()+3]).density(1).motion([0, 0.05, 0]);
				scene.idle(5);
			}
			scene.world.setBlock([3,1,2], "minecraft:comparator", false);
			scene.world.modifyBlock([3,1,2], (c) => c.with("facing", "south"), false)
            scene.world.showSection([3,1,2], Facing.down);
			for(let i = 0; i<2;i++){
				scene.particles.simple(1, "reverse_portal", [Math.random()+3,2,Math.random()+3]).density(1).motion([0, 0.05, 0]);
				scene.idle(5);
			}
			scene.world.modifyBlock([3,1,2], (c) => c.with("powered", "true"), false)
			for(let i = 0; i<4;i++){
				scene.particles.simple(1, "reverse_portal", [Math.random()+3,2,Math.random()+3]).density(1).motion([0, 0.05, 0]);
				scene.idle(5);
			}
			scene.text(70, "...or you may use an observer to emit a pulse whenever you respawn.")
			for(let i = 0; i<10;i++){
				scene.particles.simple(1, "reverse_portal", [Math.random()+3,2,Math.random()+3]).density(1).motion([0, 0.05, 0]);
				scene.idle(5);
			}
			scene.world.setBlock([4,1,3], "minecraft:observer", false);
			scene.world.modifyBlock([4,1,3], (c) => c.with("facing", "west"), false)
			scene.world.showSection([4,1,3], Facing.down);
			for(let i = 0; i<5;i++){
				scene.particles.simple(1, "reverse_portal", [Math.random()+3,2,Math.random()+3]).density(1).motion([0, 0.05, 0]);
				scene.idle(5);
			}
			scene.world.setBlock([5,1,3], "minecraft:redstone_lamp", false);
			scene.world.showSection([5,1,3], Facing.down);
			for(let i = 0; i<5;i++){
				scene.particles.simple(1, "reverse_portal", [Math.random()+3,2,Math.random()+3]).density(1).motion([0, 0.05, 0]);
				scene.idle(5);
			}
			scene.world.modifyBlock([3,1,3], (anchor) => anchor.with("charges", "3"), false)
			scene.world.modifyBlock([5,1,3], (lamp) => lamp.with("lit", "true"), false)
			for(let i = 0; i<1;i++){
				scene.particles.simple(1, "reverse_portal", [Math.random()+3,2,Math.random()+3]).density(1).motion([0, 0.05, 0]);
				scene.idle(5);
			}
			scene.world.modifyBlock([5,1,3], (lamp) => lamp.with("lit", "false"), false)
			for(let i = 0; i<10;i++){
				scene.particles.simple(1, "reverse_portal", [Math.random()+3,2,Math.random()+3]).density(1).motion([0, 0.05, 0]);
				scene.idle(5);
			}
			scene.text(70, "Oh, and don't worry about beds. §cTrust me.§r");
			for(let i = 0; i<12;i++){
				scene.particles.simple(1, "reverse_portal", [Math.random()+3,2,Math.random()+3]).density(1).motion([0, 0.05, 0]);
				scene.idle(5);
			}
			scene.markAsFinished();
        });


		//heehoo
	e.create("nyagibits_bytes:flake").scene("flake", "??????????????????", "kubejs:wall", (scene, util) => {
			let gateways = []
			for(let x = 0;x<75;x++){
				for(let y = 1;y<75;y++)
				gateways.push([x,y,0])
			}
			gateways.sort(() => Math.random() - 0.5)
			//scene.world.setBlocks([0,1,0,98,98,0], "minecraft:smooth_stone", false)
			scene.setSceneOffsetY(-5)
			scene.rotateCameraY(35)

			let scale = MC.getInstance().getWindow().getGuiScale() //THIS works? What.
			scene.scaleSceneView(2 / scale) 
			//scene.scaleSceneView(1.25)
			scene.idle(40)
            
			let timer = 0
			gateways.forEach(pos => {
				scene.world.showSection(pos, Facing.south)
				timer = timer + 1
				if (timer%200 == 0) scene.idle(1)
			})
			
			scene.idle(30)

			const r = "minecraft:red_concrete"
			const g = "minecraft:lime_concrete"
			const b = "minecraft:blue_concrete"
			const c = "minecraft:cyan_concrete"
			const m = "minecraft:magenta_concrete"
			const y = "minecraft:yellow_concrete"
			const v = "minecraft:black_concrete"

			let bg = []
			for(let x = 33;x<42;x++){
				bg.push([x,31,0])
				bg.push([x,32,0])
				bg.push([x,33,0])
			}
			bg.sort(() => Math.random() - 0.5)

			bg.forEach(pos => {
				scene.world.setBlock(pos, v, false)
				scene.idle(1)
			})
			scene.idle(50)

			let grid = [] //what, trying to look here to get more hints? Lol. Lmao.
			grid[0] = [v,v,g,m,v,v,c,v,v,c,y,v,v,y,c,c,c,v,v,v,g,m,v,v,c,v,v,c,y,v,v,y,c,c,c,v]
			grid[1] = [v,v,v,c,m,v,v,v,v,r,v,v,m,v,c,m,v,v,v,v,v,c,m,v,v,v,v,r,v,v,m,v,c,m,v,v]
			grid[2] = [r,v,v,v,v,c,v,v,v,g,m,v,v,v,v,v,v,v,r,v,v,v,v,c,v,v,v,g,m,v,v,v,v,v,v,v]
			grid[3] = [v,y,b,v,v,y,c,m,v,v,y,c,v,y,b,v,v,y,c,m,v,v,y,c,v,y,b,v,v,y,c,m,v,v,y,c]
			grid[4] = [v,m,v,m,v,v,m,v,y,r,v,v,v,m,v,m,v,v,m,v,y,r,v,v,v,m,v,m,v,v,m,v,y,r,v,v]
			grid[5] = [b,v,v,m,v,v,v,v,v,m,v,v,b,v,v,m,v,v,v,v,v,m,v,v,b,v,v,m,v,v,v,v,v,m,v,v]
			grid[6] = [c,y,c,v,v,m,c,y,v,v,v,y,c,y,c,v,v,m,c,y,v,v,v,y,c,y,c,v,v,m,c,y,v,v,v,y]
			grid[7] = [m,y,v,v,m,v,m,v,v,m,r,v,m,y,v,v,m,v,m,v,v,m,r,v,m,y,v,v,m,v,m,v,v,m,r,v]
			grid[8] = [m,v,v,v,m,c,m,m,v,v,b,c,m,v,v,v,m,c,m,m,v,v,b,c,m,v,v,v,m,c,m,m,v,v,b,c]



			for(let i = 0;i<240;i++){
				
				for(let x = 0;x<9;x++){
					scene.world.setBlock([41-x,33,0], grid[x][(i%12)*3], false)
					scene.world.setBlock([41-x,32,0], grid[x][(i%12)*3+1], false)
					scene.world.setBlock([41-x,31,0], grid[x][(i%12)*3+2], false)
				}
				scene.idle(2)
			}
			scene.world.setBlocks([33,31,0,41,33,0], v, false)
			scene.idle(30)
			bg.forEach(pos => {
				scene.world.setBlock(pos, "minecraft:end_gateway", false)
				scene.idle(1)
			})
			scene.idle(2147483647)
        });


	e.create("minecraft:pointed_dripstone").scene("dripstone_basics", "Stala(ct|gm)ites!", "kubejs:deepslate_5x5", (scene, util) => {
			scene.showBasePlate()
			scene.idle(10)
			createDripstoneSpike(scene, 2,2, 1,1, true)
			scene.world.showSection([1,1,1,3,5,3], Facing.down)
			scene.idle(10)
			scene.text(80, "Pointed dripstone can be placed and stacked up to form spikes.", [2.5,1.5,2.5]);
			scene.idle(40)
			createDripstoneSpike(scene, 2,2, 1,2, true)
			scene.idle(15)
			createDripstoneSpike(scene, 2,2, 1,3, true)
			scene.idle(15)
			createDripstoneSpike(scene, 2,2, 1,4, true)
			scene.idle(15)
			createDripstoneSpike(scene, 2,2, 1,5, true)
			scene.idle(15)
			scene.text(50, "Forming stalagmites...", [2.5,1.5,2.5]);
			scene.idle(60)
			scene.world.setBlocks([2,1,2 ,2,5,2], "minecraft:air", true)
			scene.idle(10)
			scene.world.setBlock([2,6,2], "minecraft:dripstone_block", false)
			scene.world.showSection([2,6,2], Facing.down)
			scene.idle(15)
			createDripstoneSpike(scene, 2,2, 5,5, false)
			scene.text(80, "Or stacked down to form stalactites!", [2.5,4.5,2.5]);
			scene.idle(15)
			createDripstoneSpike(scene, 2,2, 5,5, false)
			scene.idle(15)
			createDripstoneSpike(scene, 2,2, 4,5, false)
			scene.idle(15)
			createDripstoneSpike(scene, 2,2, 3,5, false)
			scene.idle(15)
			createDripstoneSpike(scene, 2,2, 2,5, false)
			scene.idle(15)
			createDripstoneSpike(scene, 2,2, 1,5, false)
			scene.idle(15)
			scene.addKeyframe()
			scene.idle(10)
			scene.text(80, "A stalactite losing support will fall and crash down.", [2.5,4.5,2.5]);
			scene.idle(30)
			scene.world.setBlock([2,6,2], "minecraft:air", true)
			scene.world.setBlocks([2,1,2, 2,5,2], "minecraft:air", false)
			let parts = []
			parts.push(scene.world.createEntity("minecraft:falling_block", [2.5, 1, 2,5], b => {b.load(`{BlockState: {Name: "minecraft:pointed_dripstone", Properties: {vertical_direction: "down", thickness: "tip"}}, Pos: [2.5d, 1d, 2.5d]}`)}))
			parts.push(scene.world.createEntity("minecraft:falling_block", [2.5, 2, 2,5], b => {b.load(`{BlockState: {Name: "minecraft:pointed_dripstone", Properties: {vertical_direction: "down", thickness: "frustum"}}, Pos: [2.5d, 2d, 2.5d]}`)}))
			parts.push(scene.world.createEntity("minecraft:falling_block", [2.5, 3, 2,5], b => {b.load(`{BlockState: {Name: "minecraft:pointed_dripstone", Properties: {vertical_direction: "down", thickness: "middle"}}, Pos: [2.5d, 3d, 2.5d]}`)}))
			parts.push(scene.world.createEntity("minecraft:falling_block", [2.5, 4, 2,5], b => {b.load(`{BlockState: {Name: "minecraft:pointed_dripstone", Properties: {vertical_direction: "down", thickness: "middle"}}, Pos: [2.5d, 4d, 2.5d]}`)}))
			parts.push(scene.world.createEntity("minecraft:falling_block", [2.5, 5, 2,5], b => {b.load(`{BlockState: {Name: "minecraft:pointed_dripstone", Properties: {vertical_direction: "down", thickness: "base"}}, Pos: [2.5d, 5d, 2.5d]}`)}))

			let items = []
			for(let i = 0;i<5;i++){
				scene.idle(3)
				scene.world.modifyEntity(parts.shift(), discard)
				items.push(scene.world.createItemEntity([2,5,1.1,2,5], [(Math.random()-0.5)/6,Math.random()/12, (Math.random()-0.5)/6], "minecraft:pointed_dripstone"))
			}
			scene.idle(40)
			items.forEach(item => scene.world.modifyEntity(item, discard))
			scene.idle(10)
			scene.addKeyframe()
			scene.idle(10)
			let creeper = scene.world.createEntity("minecraft:creeper", [2.5, 1, 2.5])
			for(let i = 0;i<100;i++){scene.particles.simple(1, "smoke", [2.5,1.75,2.5]).density(5).motion([Math.random()/5-0.1, Math.random()/2-0.1, Math.random()/5-0.1]);}
			scene.idle(10)
			scene.text(80, "Falling stalactites can be easily weaponized...", [2.5,2,2.5]);
			scene.idle(40)
			let falling = scene.world.createEntity("minecraft:falling_block", [2.5, 15, 2,5], b => {b.load(`{BlockState: {Name: "minecraft:pointed_dripstone", Properties: {vertical_direction: "down", thickness: "tip"}}, Pos: [2.5d, 15d, 2.5d]}`)})
			scene.idle(27)
			scene.world.modifyEntity(creeper, discard)
			for(let i = 0;i<100;i++){
                scene.particles.simple(2, "biomancy:falling_blood", [2.5,1.75,2.5]).density(1).motion([Math.random()/5-0.1, Math.random()/5, Math.random()/5-0.1]);
				scene.particles.simple(2, "biomancy:landing_blood", [2.5,1.75,2.5]).density(1).motion([Math.random()/5-0.1, Math.random()/5, Math.random()/5-0.1]);
				scene.particles.item(2, "minecraft:creeper_spawn_egg", [2.5,1.75,2.5]).density(1).motion([Math.random()/5-0.1, Math.random()/5, Math.random()/5-0.1]);
            }
			scene.idle(3)
			scene.world.modifyEntity(falling, discard)
			scene.world.hideSection([2,1,2, 2,2,2], Facing.up)
			scene.idle(30)
			createDripstoneSpike(scene, 2,2, 1,2, true)
			scene.world.showSection([2,1,2 , 2,2,2], Facing.west)
			scene.idle(10)
			scene.text(80, "..same goes for stalagmites!", [2.5,2,2.5]);
			scene.idle(40)
			let creeper2 = scene.world.createEntity("minecraft:creeper", [2.5, 15, 2.5])
			for(let i = 0;i<14;i++){
				scene.idle(1)
				scene.world.modifyEntity(creeper2, c =>{
					c.setPos(c.getX(), c.getY()-1, c.getZ())
				})
				
			}
			scene.world.modifyEntity(creeper2, discard)
			for(let i = 0;i<100;i++){
                scene.particles.simple(2, "biomancy:falling_blood", [2.5,2,2.5]).density(1).motion([Math.random()/5-0.1, Math.random()/5, Math.random()/5-0.1]);
				scene.particles.simple(2, "biomancy:landing_blood", [2.5,2,2.5]).density(1).motion([Math.random()/5-0.1, Math.random()/5, Math.random()/5-0.1]);
				scene.particles.item(2, "minecraft:creeper_spawn_egg", [2.5,2,2.5]).density(1).motion([Math.random()/5-0.1, Math.random()/5, Math.random()/5-0.1]);
            }
			scene.idle(50)
			scene.markAsFinished()
        })
		.scene("dripstone_cauldron","Farming Lava with Dripstone", "kubejs:deepslate_7x7", (scene, util) => {
                scene.showBasePlate();
                dripstoneCauldronScene(scene)
                scene.markAsFinished()
            })
		.scene("dripstone_farming","Growing More Dripstone", "kubejs:deepslate_5x5", (scene, util) => {
                scene.showBasePlate();
                scene.idle(10)
				scene.world.setBlock([2,5,2], "minecraft:dripstone_block", false)
				scene.world.showSection([2,5,2], Facing.down)
				scene.idle(5)
				scene.world.setBlocks([1,6,1 , 3,6,3], "create:framed_glass", false)
				scene.world.setBlock([2,6,2], "minecraft:air", false)
				scene.world.showSection([1,6,1 , 3,6,3], Facing.down)
				scene.idle(10)
				scene.world.setBlock([2,6,2], "minecraft:water", false)
				scene.particles.simple(5, "splash", [2.5, 7, 2.5]).density(2);
				scene.idle(10)
				createDripstoneSpike(scene, 2,2,4,4,false)
				scene.world.showSection([2,4,2], Facing.east)
				scene.idle(10)
				scene.text(100, "Placing pointed dripstone on a dripstone block with water above...", [2.5,5,2.5]);
				scene.idle(110)
				scene.addKeyframe()
				//screw doing this with a for loop, it ain't cooperating.
				scene.world.showSection([2,1,2,2,3,2], Facing.down)
				scene.particles.simple(1, "falling_water", [2.5,4,2.5]).density(1)
				scene.idle(20)
				scene.particles.simple(1, "falling_water", [2.5,4,2.5]).density(1)
				scene.idle(20)
				createDripstoneSpike(scene,2,2,3,4,false)
				scene.particles.simple(1, "falling_water", [2.5,3,2.5]).density(1)
				scene.idle(20)
				scene.particles.simple(1, "falling_water", [2.5,3,2.5]).density(1)
				scene.idle(20)
				createDripstoneSpike(scene,2,2,1,1,true)
				scene.particles.simple(1, "falling_water", [2.5,3,2.5]).density(1)
				scene.idle(20)
				scene.particles.simple(1, "falling_water", [2.5,3,2.5]).density(1)
				scene.idle(20)
				createDripstoneSpike(scene,2,2,1,2,true)
				scene.world.modifyBlock([2,2,2], (cur) => cur.with("vertical_direction", "up").with("thickness", "tip_merge"), false)
				scene.world.modifyBlock([2,3,2], (cur) => cur.with("vertical_direction", "down").with("thickness", "tip_merge"), false)
				scene.idle(20)
				scene.text(70, "...will slowly grow more of it!", [2.5,2,2.5]);
				scene.idle(80)
                scene.markAsFinished()
            })
			.scene("mud_drying", "Drying Mud with Dripstone", "kubejs:deepslate_5x5", (scene, util) => {
				scene.showBasePlate()
				scene.idle(10)
				scene.world.setBlock([2,3,2], "minecraft:stone_bricks", false)
				scene.world.showSection([2,3,2], Facing.east)
				scene.idle(10)
				scene.world.setBlock([2,4,2], "minecraft:mud", false)
				scene.world.showSection([2,4,2], Facing.down)
				scene.text(120, "Mud can be slowly dried by placing it on a block that has dripstone hanging underneath.", [2.5,4,2.5]);
				scene.idle(20)
				createDripstoneSpike(scene,2,2,2,2,false)
				scene.world.showSection([2,2,2], Facing.up)
				scene.idle(20)
				scene.addKeyframe()
				scene.particles.simple(1, "falling_water", [2.5,2,2.5]).density(1)
				scene.idle(30)
				scene.particles.simple(1, "falling_water", [2.5,2,2.5]).density(1)
				scene.idle(30)
				scene.particles.simple(1, "falling_water", [2.5,2,2.5]).density(1)
				scene.idle(30)
				scene.particles.simple(1, "falling_water", [2.5,2,2.5]).density(1)
				scene.world.setBlock([2,4,2], "minecraft:clay", false)
				scene.idle(50)
				scene.addKeyframe()
				scene.idle(10)
				scene.text(100, "Doing so will turn it into clay!", [2.5,4,2.5]);
				scene.idle(100)
				scene.markAsFinished()
			});


		e.create("minecraft:cauldron").scene("lava_farming_cauldron", "Farming Lava with Dripstone", "kubejs:deepslate_7x7", (scene, util) => {
			scene.showBasePlate()
			dripstoneCauldronScene(scene)
			scene.markAsFinished()
        });

		e.create("minecraft:lava_bucket").scene("lava_farming_bucket", "Farming Lava with Dripstone", "kubejs:deepslate_7x7", (scene, util) => {
			scene.showBasePlate()
			dripstoneCauldronScene(scene)
			scene.markAsFinished()
        });


//The scene for filling cauldrons with dripstone is going to be shown in both dripstone and cauldron ponders.
//We can't "use the same scene" with ponderjs, so scene creation gets delegated here and called from both ponders.
function dripstoneCauldronScene(scene){
	scene.idle(10)
	scene.world.setBlock([3,1,3], "minecraft:cauldron", false)
	scene.world.showSection([3,1,3], Facing.down)
	scene.idle(10)
	scene.world.setBlock([3,3,3], "minecraft:cobbled_deepslate", false)
	scene.world.showSection([3,3,3], Facing.down)
	scene.idle(10)
	createDripstoneSpike(scene, 3,3, 2,2, false)
	scene.world.showSection([3,2,3], Facing.up)
	scene.idle(10)
	scene.world.showSection([3,4,3], Facing.down)
	let walls = [[2,4,3],[3,4,2],[4,4,3],[3,4,4]]
	walls.forEach(pos => {
		scene.world.setBlock(pos, "create:framed_glass", false)
		scene.world.showSection(pos, Facing.down)
		scene.idle(2)
	})
	scene.idle(10)
	scene.world.setBlock([3,4,3], "minecraft:lava", false)
	scene.particles.simple(5, "lava", [3.5, 5, 3.5]).density(2);
	scene.idle(10)
	scene.text(100, "Placing dripstone like this will start dripping lava into the cauldron.", [2.5,3,2.5]);
	for(let i = 0;i<5;i++){
		scene.particles.simple(1, "falling_lava", [3.5,2.2,3.5]).density(1)
		scene.idle(20)
	}
	scene.addKeyframe()
	scene.idle(10)
	scene.world.setBlock([3,1,3], "minecraft:lava_cauldron", false)
	scene.particles.simple(5, "lava", [3.5, 2, 3.5]).density(2);
	scene.idle(20)
	scene.text(110, "After some time, the cauldron will fill up with lava, without consuming the source block!", [2.5,2,2.5]);
	scene.idle(120)
	scene.text(90, "The lava can be withdrawn with a bucket...", [2.5,2,2.5]);
	scene.showControls(90, [3.5,2,3.5], "down")
                .rightClick()
        		.withItem("bucket")
	scene.idle(90)
	scene.world.setBlocks([4,1,0,4,1,3], "create:fluid_pipe", false)
	scene.world.modifyBlocks([4,1,0, 4,1,3], p => {
		return p.with("north", true)
		.with("south", true)
		.with("east", false)
		.with("west", false)
		.with("up", false)
		.with("down", false)
	}, false)
	scene.world.modifyBlock([4,1,3], p => p.with("west", true).with("south", false), false)
	scene.world.showSection([4,1,0,4,1,3], Facing.south)
	scene.idle(10)
	scene.text(80, "...or with Create's pipes and pumps.", [4.5,2,2.5]);
	scene.idle(80)
	scene.world.setBlock([3,1,3], "minecraft:cauldron", false)
	scene.idle(10)
	scene.addKeyframe()
	scene.idle(10)
	scene.world.setBlock([3,4,3], "minecraft:water", false)
	scene.particles.simple(5, "splash", [2.5, 5, 2.5]).density(2);
	scene.idle(10)
	scene.text(150, "The same process can be performed with water, but the cauldron fills up gradually instead.", [2.5,4.5,2.5]);
	for(let i = 1;i<=15;i++){ //Starting to think ponders don't like for loops.
		scene.particles.simple(1, "falling_water", [3.5,2.2,3.5]).density(1)
		if(i == 5){
			scene.world.setBlock([3,1,3], "minecraft:water_cauldron", false)
			scene.world.modifyBlock([3,1,3], c => c.with("level", "1"), false)
		}
		if(i == 10){
			scene.world.modifyBlock([3,1,3], c => c.with("level", "2"), false)
		}
		if(i == 15){
			scene.world.modifyBlock([3,1,3], c => c.with("level", "3"), false)
		}
		scene.idle(10)
	}	
}





/** 
 * Creates a dripstone spike
 * @param {PonderSceneBuilder} scene The scene builder to place the spike in
 * @param {Number} x The x coordinate of the spike
 * @param {Number} z The z coordinate of the spike
 * @param {Number} loY The lower y-coord of the spike
 * @param {Number} hiY The higher y-coord of the spike
 * @param {boolean|undefined} upwards Whether the spike points upwards. False/Default means a downwards spike
 */
function createDripstoneSpike(scene, x, z, loY, hiY, upwards){
	let length = hiY-loY+1
	let curY = upwards ? hiY : loY
	for(let i = 0;i<length;i++){
		let thick = "middle"
		if(i == 0) thick = "tip"
		if(i == 1) thick = "frustum"
		if(i+1 == length && length > 2) thick = "base"
		scene.world.setBlock([x,curY,z], "minecraft:pointed_dripstone", false)
		scene.world.modifyBlock([x,curY,z], (cur) => cur.with("vertical_direction", upwards ? "up" : "down").with("thickness", thick), false)
		curY = curY + (upwards ? -1 : 1)
	}
}

});