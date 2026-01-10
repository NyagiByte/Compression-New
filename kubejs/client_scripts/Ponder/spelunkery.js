const NixieTube = Java.loadClass("com.simibubi.create.content.redstone.nixieTube.NixieTubeBlockEntity")

Ponder.tags((e) => {e.createTag("compression:spelunkery", "spelunkery:raw_magnetite", "Spelunkery", "ROCK AND STONE!", ["spelunkery:rock_salt_block"])});

Ponder.registry((e) => {

    e.create("spelunkery:rock_salt_block")
        .scene("luminar_salt", "Salt Lamps", "kubejs:deepslate_9x9", (scene, util) => {
            scene.showBasePlate();
            scene.idle(10);

            const stages = [
                [[4,1,3], [3,1,4], [5,1,4], [4,1,5]],
                [[4,1,2], [5,1,3], [6,1,4], [5,1,5], [4,1,6], [3,1,5], [2,1,4], [3,1,3]],
                [[4,1,1], [5,1,2], [6,1,3], [7,1,4], [6,1,5], [5,1,6], [4,1,7], [3,1,6], [2,1,5], [1,1,4], [2,1,3], [3,1,2]],
                [[5,1,1], [6,1,2], [7,1,3], [7,1,5], [6,1,6], [5,1,7], [3,1,7], [2,1,6], [1,1,5], [1,1,3], [2,1,2], [3,1,1]],
                [[6,1,1], [7,1,2], [7,1,6], [6,1,7], [2,1,7], [1,1,6], [1,1,2], [2,1,1]],
                [[1,1,1], [7,1,1], [7,1,7], [1,1,7]]
            ];
            scene.world.setBlock([4,1,4], "minecraft:redstone_lamp", false);
            scene.world.setBlock([4,2,4], "minecraft:lever", false);
            scene.world.modifyBlock([4,2,4], (lever) => lever.with("face", "floor"), false)
            scene.world.showSection([4,1,4 , 4,2,4], Facing.down)
            scene.idle(5)
            stages.forEach((stage) => {
                stage.forEach((pos) => {
                    scene.world.setBlock(pos, "spelunkery:rock_salt_block", false)
                    scene.world.showSection(pos, Facing.down)
                })
                scene.idle(3)
            })

            scene.idle(10);
            scene.text(60, "When luminar salt is placed in contact with a light source...", [5,1.5,5]).placeNearTarget();
            scene.idle(65)
            scene.addKeyframe()
            scene.idle(10)
            scene.world.modifyBlock([4,2,4], (lever) => lever.with("powered", "true").with("face", "floor"), false)
            scene.effects.indicateRedstone([4,2,4])
            scene.world.modifyBlock([4,1,4], (lamp) => lamp.with("lit", "true"), false)
            

            stages.forEach((stage) => {
                stage.forEach((pos) => {
                    scene.world.modifyBlock(pos, (pos) => pos.with("illuminated", "true"), false)
                })
                scene.idle(1)
            })
            scene.text(60, "It will become illuminated!", [4,1.5,4]).placeNearTarget();
            scene.idle(70);
            scene.text(80, "Removing the light source will de-illuminate the blocks shortly after.", [4,1.5,4]).placeNearTarget();
            scene.idle(10)
            scene.world.modifyBlock([4,2,4], (lever) => lever.with("powered", "false").with("face", "floor"), false)
            scene.world.modifyBlock([4,1,4], (lamp) => lamp.with("lit", "false"), false)
            scene.idle(20)
            stages.forEach((stage) => {
                stage.forEach((pos) => {
                    scene.world.modifyBlock(pos, (pos) => pos.with("illuminated", "false"), false)
                })
            })
            scene.idle(75)

            scene.world.hideSection([1,1,1, 7,2,7], Facing.up)
            scene.idle(10);
            scene.world.setBlocks([1,1,1, 7,2,7], "minecraft:air", false)
            scene.addKeyframe();
            scene.idle(10)
            const saltSpiral = [[4,1,5], [4,1,6], [3,1,6], [2,1,6], [2,1,5], [2,1,4], [2,1,3], [2,1,2], [3,1,2], [4,1,2], [5,1,2], [6,1,2], [6,1,3], [6,1,4], [6,1,5], [6,1,6]]
            saltSpiral.forEach((pos) =>{
                scene.world.setBlock(pos, "spelunkery:rock_salt_block", false)
                scene.world.showSection(pos, Facing.down)
                scene.idle(2)
            })
            scene.text(150, "The illumination spreads by direct contact, for an amount of blocks based on the source's light level (One less than the light's level).", [4,1.5,4]).placeNearTarget();
            scene.idle(15)
            scene.world.setBlock([4,1,4], "minecraft:redstone_torch", false);
            scene.world.showSection([4,1,4], Facing.down)
            scene.showControls(60, [4,2.5,4], "down").withItem(Item.of("minecraft:light", '{BlockStateTag:{level:"7"}}'));
            scene.idle(5)
            
            for(let i = 0;i<6;i++){
                scene.world.modifyBlock(saltSpiral[i], (salt) => salt.with("illuminated", "true"), false)
                scene.idle(1)
            }
            scene.idle(70)
            scene.world.setBlock([4,1,4], "minecraft:glowstone", true);
            scene.showControls(60, [4,2.5,4], "down").withItem(Item.of("minecraft:light", '{BlockStateTag:{level:"15"}}'));
            scene.idle(5)
            for(let i = 6;i<14;i++){
                scene.world.modifyBlock(saltSpiral[i], (salt) => salt.with("illuminated", "true"), false)
                scene.idle(1)
            }
            scene.idle(70)
            scene.world.hideSection([1,1,1, 7,2,7], Facing.up)
            scene.idle(15)
            scene.world.setBlocks([1,1,1, 7,2,7], "minecraft:air", false)
            scene.addKeyframe();
            scene.idle(5)

            scene.world.setBlock([5,1,6], "minecraft:glowstone", false)
            scene.world.setBlocks([5,1,5, 5,1,2], "spelunkery:rock_salt_block", false)
            scene.world.modifyBlocks([5,1,5, 5,1,2], (salt) => salt.with("illuminated", "true"), false)
            scene.world.showSection([5,1,6, 5,1,2], Facing.down)
            scene.idle(5)
            scene.world.setBlocks([4,1,5 , 4,1,2], "minecraft:comparator", false)
            scene.world.modifyBlocks([4,1,5, 4,1,2], (cmp) => cmp.with("powered", true).with("facing", "east"), false)
            scene.world.showSection([4,1,5, 4,1,2], Facing.down)
            scene.idle(5)
            scene.world.setBlocks([3,1,5 , 3,1,2], "create:nixie_tube", false)
            scene.world.modifyBlocks([3,1,5 , 3,1,2], (nix) => nix.with("facing", "west"), false)
            
            scene.world.modifyBlockEntity([3,1,5], NixieTube, (nix) => {
                        nix.updateRedstoneStrength(14);
                        nix.updateDisplayedStrings()
                    })
            scene.world.modifyBlockEntity([3,1,4], NixieTube, (nix) => {
                        nix.updateRedstoneStrength(13);
                        nix.updateDisplayedStrings()
                    })
            scene.world.modifyBlockEntity([3,1,3], NixieTube, (nix) => {
                        nix.updateRedstoneStrength(12);
                        nix.updateDisplayedStrings()
                    })
            scene.world.modifyBlockEntity([3,1,2], NixieTube, (nix) => {
                        nix.updateRedstoneStrength(11);
                        nix.updateDisplayedStrings()
                    })
            scene.world.showSection([3,1,5 , 3,1,2], Facing.down)
            scene.text(90, "A comparator will emit a redstone signal based on the illumination level, which is NOT the light level.", [4,1.5,4]);
            scene.idle(100)
            scene.text(90, "The illumination level is the source's light level minus the amount of salt blocks in between.", [4,1.5,4]);
            scene.idle(100)
            scene.markAsFinished();
        })
        .scene("luminar_signal_decay", "Illumination Decay", "kubejs:deepslate_5x5", (scene, util) => {
            scene.showBasePlate()
            scene.idle(10);
            scene.world.setBlock([3,1,3], "minecraft:redstone_lamp", false)
            scene.world.modifyBlock([3,1,3], (lamp) => lamp.with("lit", "true"), false);
            scene.world.setBlock([3,2,3], "minecraft:lever", false)
            scene.world.modifyBlock([3,2,3], (lever) => lever.with("powered", "true").with("face", "floor"), false)
            scene.world.setBlock([2,1,3], "spelunkery:rock_salt_block", false)
            scene.world.modifyBlock([2,1,3], (salt) => salt.with("illuminated", "true"), false);
            scene.world.setBlock([2,1,2], "minecraft:comparator", false)
            scene.world.modifyBlock([2,1,2], (cmp) => cmp.with("facing", "south").with("powered", "true"), false);
            scene.world.setBlock([2,1,1], "create:nixie_tube", false)
            scene.world.modifyBlock([2,1,1], (nix) => nix.with("facing", "west"), false)
            scene.world.modifyBlockEntity([2,1,1], NixieTube, (nix) => {
                        nix.updateRedstoneStrength(14);
                        nix.updateDisplayedStrings()
                    })
            scene.world.showSection([3,2,3 , 2,1,1], Facing.down)
            scene.idle(5)
            scene.text(90, "A lone salt block will de-illuminate immediately once the light source is cut.", [2,1.5,3]);
            scene.idle(60)
            scene.world.modifyBlock([3,2,3], (lever) => lever.with("powered", "false").with("face", "floor"), false)
            scene.idle(1)
            scene.world.modifyBlock([3,1,3], (lamp) => lamp.with("lit", "false"), false);
            scene.idle(1)
            scene.world.modifyBlock([2,1,3], (salt) => salt.with("illuminated", "false"), false);
            scene.idle(1)
            scene.world.modifyBlock([2,1,2], (cmp) => cmp.with("facing", "south").with("powered", "false"), false);
            scene.idle(1)
            scene.world.modifyBlockEntity([2,1,1], NixieTube, (nix) => {
                        nix.updateRedstoneStrength(0);
                        nix.updateDisplayedStrings()
                    })
            scene.idle(40)
            scene.addKeyframe()
            scene.idle(10)
            scene.world.setBlock([1,1,3], "spelunkery:rock_salt_block", false)
            scene.world.showSection([1,1,3], Facing.down)
            scene.idle(10)
            scene.text(100, "Something interesting happens if illuminated salt blocks are adjacent...", [1,1.5,3]);
            scene.idle(20)
            scene.world.modifyBlock([3,2,3], (lever) => lever.with("powered", "true").with("face", "floor"), false)
            scene.effects.indicateRedstone([3,2,3])
            scene.idle(1)
            scene.world.modifyBlock([3,1,3], (lamp) => lamp.with("lit", "true"), false);
            scene.idle(1)
            scene.world.modifyBlock([2,1,3], (salt) => salt.with("illuminated", "true"), false);
            scene.idle(1)
            scene.world.modifyBlock([2,1,2], (cmp) => cmp.with("facing", "south").with("powered", "true"), false);
            scene.world.modifyBlock([1,1,3], (salt) => salt.with("illuminated", "true"), false);
            scene.idle(1)
            scene.world.modifyBlockEntity([2,1,1], NixieTube, (nix) => {
                        nix.updateRedstoneStrength(14);
                        nix.updateDisplayedStrings()
                    })
            scene.idle(10)
            for(let i = 0;i<3;i++){
                scene.overlay.showOutline(PonderPalette.RED, "airgap", [2,1,1], 10);
                scene.idle(20)
            }
            scene.idle(10)
            scene.addKeyframe()
            scene.idle(10)
            scene.world.modifyBlock([3,2,3], (lever) => lever.with("powered", "false").with("face", "floor"), false)
            scene.idle(1)
            scene.world.modifyBlock([3,1,3], (lamp) => lamp.with("lit", "false"), false);
            scene.idle(2)

            scene.world.modifyBlockEntity([2,1,1], NixieTube, (nix) => {
                        nix.updateRedstoneStrength(12);
                        nix.updateDisplayedStrings()
                    })
            scene.idle(2)
            scene.world.modifyBlockEntity([2,1,1], NixieTube, (nix) => {
                        nix.updateRedstoneStrength(10);
                        nix.updateDisplayedStrings()
                    })
            scene.idle(2)
            scene.world.modifyBlockEntity([2,1,1], NixieTube, (nix) => {
                        nix.updateRedstoneStrength(8);
                        nix.updateDisplayedStrings()
                    })
            scene.idle(2)
            scene.world.modifyBlockEntity([2,1,1], NixieTube, (nix) => {
                        nix.updateRedstoneStrength(6);
                        nix.updateDisplayedStrings()
                    })
            scene.idle(2)
            scene.world.modifyBlockEntity([2,1,1], NixieTube, (nix) => {
                        nix.updateRedstoneStrength(4);
                        nix.updateDisplayedStrings()
                    })
            scene.idle(2)
            scene.world.modifyBlockEntity([2,1,1], NixieTube, (nix) => {
                        nix.updateRedstoneStrength(2);
                        nix.updateDisplayedStrings()
                    })
            scene.world.modifyBlock([2,1,3], (salt) => salt.with("illuminated", "false"), false);
            scene.idle(1)
            scene.world.modifyBlock([1,1,3], (salt) => salt.with("illuminated", "false"), false);
            scene.world.modifyBlock([2,1,2], (cmp) => cmp.with("facing", "south").with("powered", "false"), false);
            scene.idle(1)

            scene.world.modifyBlockEntity([2,1,1], NixieTube, (nix) => {
                        nix.updateRedstoneStrength(0);
                        nix.updateDisplayedStrings()
                    })
            scene.idle(20)
            scene.text(150, "The salt blocks will piggyback off eachother, creating a comparator output that gradually diminishes over the course of a few ticks!", [2,1.5,3]);
            scene.idle(160)
            scene.text(50, "Could be useful...", [2,1.5,3]);
            scene.idle(60)
            scene.markAsFinished();
        });

})