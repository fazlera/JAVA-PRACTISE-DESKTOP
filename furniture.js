/*
1.chairWood = 3;
2.TableWood = 10;
3.bedWood   = 50;
*/

function furnitureWood(chairQuantity, tableQuantity,bedQuantity){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood   = 50;

    let chairWoodCount = perChairWood * chairQuantity;
    let tableWoodCount = perTableWood * tableQuantity;
    let bedWoodCount   = perBedWood   * bedQuantity;

    const totalWoodCount = chairWoodCount + tableWoodCount + bedWoodCount;

    return totalWoodCount;
}

const woodCalculation = furnitureWood(12,2,2);
console.log('Total wood',woodCalculation,'Cft');