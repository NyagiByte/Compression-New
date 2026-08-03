Ponder.tags((e) => {
	e.createTag("compression:pneumaticcraft", "pneumaticcraft:pressure_gauge", "PneumaticCraft", "Never enough press-*explosion*", [
		"pneumaticcraft:yeast_culture_bucket"
	]);
});


Ponder.registry((e) => {

    e.create("pneumaticcraft:yeast_culture_bucket")
        .scene("yeast_culture", "Growing Liquid", (scene, util) => {
            scene.showBasePlate();
            scene.idle(5);
            var glass = [[1,1,1],[2,1,1],[3,1,1],[4,1,1],[1,1,3],[2,1,3],[3,1,3],[4,1,3], [1,1,2], [4,1,2]]
            glass.sort(() => Math.random() - 0.5)
            glass.forEach(pos => {
                scene.world.setBlock(pos, "create:framed_glass", false)
                scene.world.showSection(pos, Facing.down)
                scene.idle(2)
            })
            scene.world.showSection([2,1,2, 3,1,2], Facing.down)
            scene.idle(10)
            scene.text(90, "Yeast Culture can be propagated into water. To do so, place them next to eachother.", [2.5,1.5,2.5]);
            scene.idle(10)
            scene.showControls(30, [2.5,2,2.5], "down")
                .rightClick()
        		.withItem("water_bucket")
            scene.idle(30)
            scene.showControls(30, [3.5,2,2.5], "down")
                .rightClick()
        		.withItem("pneumaticcraft:yeast_culture_bucket")
            scene.idle(30)
            scene.world.setBlock([2,1,2], "minecraft:water", false)
            scene.particles.simple(5, "splash", [2.5, 2, 2.5]).density(2);
            scene.world.setBlock([3,1,2], "pneumaticcraft:yeast_culture", false)
            scene.idle(30)
            scene.addKeyframe()
            scene.idle(10)
            scene.text(90, "Then, drop sugar into the yeast culture. NOT in the water.", [3.5,1.5,2.5]);
            scene.idle(40)
            var sugar = scene.world.createItemEntity([3.5, 3, 2.5], [0, 0.2, 0], "minecraft:sugar");
            scene.idle(150)
            scene.text(50, "......nothing?", [3.5,1.5,2.5]);
            scene.idle(60)
            scene.addKeyframe()
            scene.idle(10)
            scene.text(90, "In order for yeast culture to do its thing, it must receive a block update.", [3.5,1.5,2.5]);
            scene.idle(100)
            scene.text(90, "In other words, pretend it's an Observer.", [3.5,1.5,2.5]);
            scene.showControls(90, [3.5,2,2.5], "down")
                .rightClick()
        		.withItem("observer")
            scene.idle(40)
            scene.world.setBlock([3,1,1], "minecraft:glass", true)
            scene.idle(40)
            scene.world.setBlock([2,1,2], "pneumaticcraft:yeast_culture", true)
            scene.world.modifyEntity(sugar, s => s.discard())
            scene.idle(10)
            scene.addKeyframe()
            scene.idle(10)
            scene.text(90, "The sugar gets consumed, and the water turns into more yeast culture!", [2.5,1.5,2.5]);
            scene.idle(100)
            scene.text(90, "The new culture can now be removed and replaced with more water.", [2.5,1.5,2.5]);
            scene.showControls(90, [2.5,2,2.5], "down")
                .rightClick()
        		.withItem("bucket")
            scene.idle(30)
            scene.world.setBlock([2,1,2], "air", true)
            scene.idle(30)
            scene.world.setBlock([2,1,2], "minecraft:water", false)
            scene.particles.simple(5, "splash", [2.5, 2, 2.5]).density(2);
            scene.idle(40)
            scene.addKeyframe()
            scene.idle(10)
            scene.text(120, "Tip: A redstone lamp connected to a timer can provide block updates.", [3.5,1.5,1.5]);
            scene.idle(20)
            scene.world.setBlock([3,1,1], "minecraft:redstone_lamp", true)
            scene.world.setBlock([3,1,0], "create:pulse_timer", false)
            scene.world.modifyBlock([3,1,0], (t) => t.with("powered", "true"), false)
            scene.world.showSection([3,1,0], Facing.down)
            scene.idle(30)
            scene.world.modifyBlock([3,1,0], (t) => t.with("powered", "false"), false)
            scene.idle(20)
            for(let i = 0;i<10;i++){
                scene.world.modifyBlock([3,1,0], (t) => t.with("powering", "true"), false)
                scene.world.modifyBlock([3,1,1], (t) => t.with("lit", "true"), false)
                if(i == 4) sugar = scene.world.createItemEntity([3.5, 3, 2.5], [0, 0.2, 0], "minecraft:sugar");
                if(i == 6) {
                    scene.world.setBlock([2,1,2], "pneumaticcraft:yeast_culture", true)
                    scene.world.modifyEntity(sugar, s => s.discard())
                }
                scene.idle(4)
                scene.world.modifyBlock([3,1,0], (t) => t.with("powering", "false"), false)
                scene.world.modifyBlock([3,1,1], (t) => t.with("lit", "false"), false)
                scene.idle(16)
            }
            scene.world.modifyBlock([3,1,0], (t) => t.with("powered", "true"), false)
            scene.markAsFinished()
        });

})