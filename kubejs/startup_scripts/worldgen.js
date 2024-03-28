WorldgenEvents.remove(event =>  {
    event.removeFeatureById('underground_ores', 
    ['create:zinc_ore', 'forbidden_arcanus:xpetrified_ore', 
    'forbidden_arcanus:arcane_crystal_ore', 'forbidden_arcanus:stella_arcanum', 
    'forbidden_arcanus:runic_stone', 'iceandfire:silver_ore', 
    'iceandfire:deepslate_silver_ore', 'iceandfire:sapphire_ore', 
    'create_dd:tin_ore', 'create_dd:deepslate_tin_ore'])
})