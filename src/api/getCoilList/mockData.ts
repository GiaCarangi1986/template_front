import {CoilListGettingType} from "./serializer/incoming";
import {incoming} from "./serializer";

export const rollListData: CoilListGettingType = {
    count: 2,
    next: '',
    previous: '',
    results: [
        {
            id: 1,
            ims_coil_id: '1',
            melting: 'melting',
            supply: 'supply',
            is_parent: false,
            childs: [],
            create_time: new Date(),
            end_time: new Date(),
            grade: 'grade',
            surface_quality: 'surface',
            defects_count: 5,
            parent_coil_id: null,
            size: {
                width: 50,
                startx: 0,
                endx: 10
            }
        },
        {
            id: 2,
            ims_coil_id: '2',
            melting: 'melting',
            supply: 'supply',
            is_parent: false,
            childs: [],
            create_time: new Date(),
            end_time: new Date(),
            grade: 'grade',
            surface_quality: 'surface_quality',
            defects_count: 0,
            parent_coil_id: null,
            size: {
                width: 59,
                startx: 50,
                endx: 109
            }
        }
    ]
};

export const getMockCoilList = () => ({
    data: incoming.coilList(rollListData)
});
