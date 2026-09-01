Ponder.tags((e) => {
	e.createTag("compression:ae2", "ae2:controller", "Applied Energistics", "The Heart of the Factory", [
		"ae2:growth_accelerator"
	]);
});


Ponder.registry((e) => {

    e.create("ae2:growth_accelerator")
        .scene("growth_accelerator_basics", "We can go faster.", "kubejs:sky_stone_7x7", (scene, util) => {
            scene.showBasePlate();
            scene.idle(10)
            scene.world.setBlock([3,1,3], "ae2:growth_accelerator", false)
            scene.world.modifyBlock([3,1,3], g => g.with("facing", "up"), false)
            scene.world.showSection([3,1,3], Facing.down)
            scene.idle(10)
            scene.text(80, "The Growth Accelerator is a device that can speed up certain processes.", [3.5,1.5,3.5]);
            scene.idle(85)
            scene.addKeyframe()
            scene.idle(5)
            scene.text(70, "To use it, it must be powered by a ME network.", [3.5,2,3.5]);
            scene.world.setBlock([6,1,3], "ae2:creative_energy_cell", false)
            scene.world.showSection([6,1,3], Facing.down)
            scene.idle(15)
            // Reference on how to handle AE2 cables in ponderjs
            // https://github.com/AppliedEnergistics/Applied-Energistics-2/blob/main/ponderjs.md
            // Note: It uses some outdated method names, like modifyTileNBT.
            scene.world.setBlocks([3,2,3, 6,2,3], "ae2:cable_bus", false)
            scene.world.modifyBlockEntityNBT([4,2,3, 5,2,3], nbt => {
                nbt.cable = { id: "ae2:fluix_glass_cable",
                    visual: { connections:["west", "east"] } }
            })
            //Note, do not try to adjust individual properties. It does not like that. At all.
            //Really, you will crash. Maybe i should make a function for this.
            scene.world.modifyBlockEntityNBT([3,2,3], nbt => {
                nbt.cable = { id: "ae2:fluix_glass_cable",
                    visual: { connections:["east", "down"] } }
            })
            scene.world.modifyBlockEntityNBT([6,2,3], nbt => {
                nbt.cable = { id: "ae2:fluix_glass_cable",
                    visual: { connections:["west", "down"] } }
            })
            scene.world.showSection([3,2,3, 6,2,3], Facing.down)
            scene.idle(15)
            scene.world.modifyBlock([3,1,3], g => g.with("facing", "up").with("powered", "true"), false)
            scene.idle(50)
            scene.text(90, "It will only accept connections from the faces marked with a cross.", [3.5,2,3.5]);
            scene.idle(95)
            scene.addKeyframe()
            scene.idle(10)
            scene.text(80, "The Accelerator will affect blocks adjacent to the unmarked faces.", [3.5,1.5,3.5]);
            scene.overlay.showOutline(PonderPalette.GREEN, "side1", [2,1,3], 80); //TIL that string is an ID, and it MUST be unique. Huh!
            scene.overlay.showOutline(PonderPalette.GREEN, "side2", [3,1,2], 80);
            scene.overlay.showOutline(PonderPalette.GREEN, "side3", [4,1,3], 80);
            scene.overlay.showOutline(PonderPalette.GREEN, "side4", [3,1,4], 80);
            scene.idle(90)
            scene.text(140, "Its intended purpose is to speed up the growth of crystals from budding certus blocks...", [2.5,1.5,3.5]);
            scene.idle(20)
            scene.world.setBlock([2,1,3], "ae2:flawless_budding_quartz", false)
            scene.world.showSection([1,1,2, 2,2,4], Facing.down)
            scene.idle(20)
            let clusters = [[[2,2,3],"up"], [[1,1,3],"west"], [[2,1,4],"south"], [[2,1,2],"north"]]
            growClusters(scene, "ae2:small_quartz_bud", clusters)
            growClusters(scene, "ae2:medium_quartz_bud", clusters)
            growClusters(scene, "ae2:large_quartz_bud", clusters)
            growClusters(scene, "ae2:quartz_cluster", clusters)
            scene.idle(30)
            clusters.forEach(pos => scene.world.setBlock(pos[0], "air", true))
            scene.world.setBlock([2,1,3], "minecraft:budding_amethyst", true)
            scene.idle(20)
            scene.text(100, "...or budding amethyst blocks", [2.5,1.5,3.5]);
            growClusters(scene, "minecraft:small_amethyst_bud", clusters)
            growClusters(scene, "minecraft:medium_amethyst_bud", clusters)
            growClusters(scene, "minecraft:large_amethyst_bud", clusters)
            growClusters(scene, "minecraft:amethyst_cluster", clusters)
            scene.idle(30)
            scene.text(90, "Note: Effect sped up for demonstration purposes.", [2.5,1.5,3.5]);
            scene.idle(50)
            scene.world.modifyBlocks([1,1,2, 2,2,4], "air", true)
            scene.idle(25)
            scene.world.hideSection([1,1,2, 2,2,4], Facing.up)
            scene.idle(25)
            scene.addKeyframe()
            scene.idle(10)
            scene.world.setBlock([2,0,2], "water", true)
            scene.world.setBlock([3,0,2], "dirt", true)
            scene.world.setBlock([2,0,3], "farmland", true)
            scene.world.modifyBlock([2,0,3], f => f.with("moisture", "7"), false)
            scene.idle(15)
            scene.text(100, "It can also speed up the growth of many crops...", [2.5,1,3.5]);
            scene.world.showSection([2,1,3], Facing.down)
            scene.world.showSection([3,1,2, 3,2,2], Facing.down)
            scene.idle(20)
            scene.world.setBlock([2,1,3], "minecraft:wheat", false)
            scene.idle(10)
            //this god damn wheat, it just refuses to do it with a for loop.
            scene.world.modifyBlock([2,1,3], w => w.with("age", "1"), false); scene.idle(10)
            scene.world.modifyBlock([2,1,3], w => w.with("age", "2"), false); scene.idle(10)
            scene.world.modifyBlock([2,1,3], w => w.with("age", "3"), false); scene.idle(10)
            scene.world.modifyBlock([2,1,3], w => w.with("age", "4"), false); scene.idle(10)
            scene.world.modifyBlock([2,1,3], w => w.with("age", "5"), false); scene.idle(10)
            scene.world.modifyBlock([2,1,3], w => w.with("age", "6"), false); scene.idle(10)
            scene.world.modifyBlock([2,1,3], w => w.with("age", "7"), false); scene.idle(10)
            scene.idle(20)
            scene.text(100, "...any many other plants too", [3.5,1,2.5]);
            scene.idle(20)
            scene.world.setBlock([3,1,2], "minecraft:bamboo_sapling", false)
            scene.idle(20)
            scene.world.setBlocks([3,1,2, 3,2,2], "minecraft:bamboo", false)
            scene.world.modifyBlock([3,2,2], b => b.with("leaves", "small"), false)
            scene.idle(20)
            scene.world.setBlock([3,2,2], "air", true)
            scene.idle(20)
            scene.world.setBlock([3,2,2], "minecraft:bamboo", false)
            scene.world.modifyBlock([3,2,2], b => b.with("leaves", "small"), false)
            scene.idle(30)

            scene.markAsFinished()
        })
        .scene("growth_accelerator_extras", "Getting a bit silly", "kubejs:sky_stone_7x7", (scene, util) => {
				scene.showBasePlate()
				scene.idle(10)
				scene.world.setBlock([3,1,3], "ae2:growth_accelerator", false)
                scene.world.modifyBlock([3,1,3], g => g.with("facing", "up").with("powered", "true"), false)
                scene.world.setBlock([6,1,3], "ae2:creative_energy_cell", false)
                scene.world.setBlocks([3,2,3, 6,2,3], "ae2:cable_bus", false)
                scene.world.modifyBlockEntityNBT([4,2,3, 5,2,3], nbt => {
                    nbt.cable = { id: "ae2:fluix_glass_cable",
                        visual: { connections:["west", "east"] } }
                })
                scene.world.modifyBlockEntityNBT([3,2,3], nbt => {
                    nbt.cable = { id: "ae2:fluix_glass_cable",
                        visual: { connections:["east", "down"] } }
                })
                scene.world.modifyBlockEntityNBT([6,2,3], nbt => {
                    nbt.cable = { id: "ae2:fluix_glass_cable",
                        visual: { connections:["west", "down"] } }
                })
                scene.world.showSection([3,1,3 , 6,2,3], Facing.down)
                scene.idle(10)
                scene.text(150, "Normally, that would be it. However, in this world, a lot more things will respond to the Accelerator.", [3.5,1.5,3.5]);
                scene.idle(160)
                scene.addKeyframe()
                scene.idle(10)
                scene.world.setBlocks([1,1,2, 3,1,2], "create:framed_glass", false)
                scene.world.setBlocks([1,1,4, 3,1,4], "create:framed_glass", false)
                scene.world.setBlock([1,1,3], "create:framed_glass", false)
                scene.world.showSection([1,1,2, 3,1,2], Facing.down)
                scene.world.showSection([1,1,4, 3,1,4], Facing.down)
                scene.world.showSection([1,1,3, 2,1,3], Facing.down)
                scene.idle(15)
                scene.text(150, "It can accelerate the recrystallization of some chemicals.", [2.5,1.5,3.5]);
                scene.idle(30)
                scene.world.setBlock([2,1,3], "nyagibits_bytes:impure_2_5_dimethoxybenzoic_acid_block", false)
                scene.idle(20)
                scene.world.setBlock([2,1,3], "nyagibits_bytes:octane_block", true)
                var crystal = scene.world.createItemEntity([2.5, 0.5, 3.5], [-0.05, 0.5, -0.05], "nyagibits_bytes:2_5_dimethoxybenzoic_acid_dust")
                scene.idle(70)
                scene.world.modifyEntity(crystal, discard)
                scene.world.setBlocks([1,1,2, 3,1,2], "air", true)
                scene.world.setBlocks([1,1,4, 3,1,4], "air", true)
                scene.world.setBlocks([1,1,3, 2,1,3], "air", true)
                scene.idle(10)
                scene.world.hideSection([1,1,2, 3,1,2], Facing.up)
                scene.world.hideSection([1,1,4, 3,1,4], Facing.up)
                scene.world.hideSection([1,1,3, 2,1,3], Facing.up)
                scene.idle(15)
                scene.addKeyframe()
                scene.idle(10)
                //compost, 2,5,7, rich soil
                scene.world.setBlock([2,1,3], "farmersdelight:organic_compost", false)
                scene.world.showSection([2,1,3, 2,2,3], Facing.down)
                scene.idle(15)
                scene.text(120, "It can accelerate the decomposition of organic compost into rich soil.", [2.5,1.5,3.5]);
                scene.idle(30)
                scene.world.modifyBlock([2,1,3], c => c.with("composting", "2"), false)
                scene.idle(20)
                scene.world.modifyBlock([2,1,3], c => c.with("composting", "5"), false)
                scene.idle(20)
                scene.world.modifyBlock([2,1,3], c => c.with("composting", "7"), false)
                scene.idle(20)
                scene.world.setBlock([2,1,3], "farmersdelight:rich_soil", false)
                scene.idle(40)
                scene.showControls(15, [2.5,2,3.5], "down").withItem("minecraft:iron_hoe");
                scene.idle(20)
                scene.world.setBlock([2,1,3], "farmersdelight:rich_soil_farmland", true)
                scene.showControls(15, [2.5,2,3.5], "down").withItem("minecraft:water_bucket");
                scene.idle(20)
                scene.world.modifyBlock([2,1,3], f => f.with("moisture", "7"), false)
                scene.idle(20)
                scene.text(120, "It can then accelerate the actual rich soil!", [2.5,1.5,3.5]);
                scene.idle(20)
                scene.world.setBlock([2,2,3], "minecraft:wheat", false)
                scene.idle(30)
                scene.world.modifyBlock([2,2,3], (f) => f.with("age", "7"), true)
                for(let i = 0;i<20;i++){
                    scene.particles.simple(1, "composter", [2+Math.random(), 2+Math.random(), 3+Math.random()/2]).density(1);
                }
                scene.idle(50)
                scene.world.setBlocks([2,1,3 , 2,2,3], "air", true)
                scene.idle(10)
                scene.world.hideSection([2,1,3 , 2,2,3], Facing.up)
                scene.idle(20)
                scene.addKeyframe()
                scene.idle(10)
                scene.world.modifyBlockEntityNBT([3,2,3], nbt => {
                    nbt.cable = { id: "ae2:fluix_glass_cable",
                        visual: { connections:["east"] } }
                })
                scene.world.hideSection([3,1,3], Facing.south)
                scene.idle(15)
                scene.world.setBlock([3,3,3], "ae2:growth_accelerator", false)
                scene.world.modifyBlock([3,3,3], g => g.with("facing", "up").with("powered", "true"), false)
                scene.world.showSection([3,3,3], Facing.down)
                scene.idle(10)
                scene.world.modifyBlockEntityNBT([3,2,3], nbt => {
                    nbt.cable = { id: "ae2:fluix_glass_cable",
                        visual: { connections:["east", "up"] } }
                })
                scene.world.setBlock([2,4,3], "minecraft:stone_bricks", false)
                scene.world.setBlocks([1,5,2, 3,5,4], "create:framed_glass", false)
                scene.world.setBlock([2,5,3], "minecraft:air", false)
            
                scene.world.showSection([1,4,2, 3,5,4], Facing.down)
                scene.idle(15)
                scene.world.setBlock([2,5,3], "minecraft:lava", false)
                scene.particles.simple(5, "lava", [2.5, 6, 3.5]).density(2);
                scene.idle(10)
                scene.text(100, "It can accelerate pointed dripstone.", [2.5,3.5,3.5]);
                scene.idle(30)
                scene.world.setBlock([2,3,3], "minecraft:pointed_dripstone", false)
                scene.world.modifyBlock([2,3,3], (cur) => cur.with("vertical_direction", "down").with("thickness", "tip"), false)
                scene.world.showSection([2,3,3], Facing.up)
                scene.idle(20)
                scene.world.setBlock([2,1,3], "minecraft:cauldron", false)
                scene.world.showSection([2,1,3], Facing.north)
                scene.idle(20)
                scene.particles.simple(1, "falling_lava", [2.5,3.2,3.5]).density(1)
                scene.idle(20)
                scene.particles.simple(1, "falling_lava", [2.5,3.2,3.5]).density(1)
                scene.world.setBlock([2,1,3], "minecraft:lava_cauldron", false)
                scene.particles.simple(5, "lava", [2.5, 2, 3.5]).density(2);
                scene.idle(30)
                scene.text(100, "Accelerated dripstone can do more than just this.", [2.5,3.5,3.5]);
                scene.idle(110)
                scene.text(140, "It has a ponder too, anything that involves waiting, can be accelerated!", [2.5,3.5,3.5]);
                scene.idle(150)
				scene.markAsFinished()
			});

        

})

//We need to do this several times so function it is.
function growClusters(scene, type, positions){
    positions.sort(() => Math.random() - 0.5)
    positions.forEach(pos => {
        scene.world.setBlock(pos[0], type, false)
        scene.world.modifyBlock(pos[0], c => c.with("facing", pos[1]), false)
        scene.idle(5)
    });

}