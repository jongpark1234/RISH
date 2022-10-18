import { useRecoilState } from 'recoil'
import { cubeGradeState } from '../../../../../stores/atom'
const Render = () => {
    const [cubeGrade, setCubeGrade] = useRecoilState(cubeGradeState)

    if (cubeGrade == 0) { // Case in rare
        const first = [['STR : +12', 96.4912], ['DEX : +12', 92.9824], ['INT : +12', 89.4736], ['LUK : +12', 85.9648], ['최대 HP : +120', 80.7016], ['최대 MP : +120', 75.4384], ['공격력 : +12', 71.9296], ['마력 : +12', 68.4208], ['STR : +3%', 64.9120], ['DEX : +3%', 61.4032], ['INT : +3%', 57.8944], ['LUK : +3%', 54.3856], ['공격력 : +3%', 52.6312], ['마력 : +3%', 50.8768], ['크리티컬 확률 : +4%', 49.1224], ['데미지 : +3%', 47.3680], ['올스탯 : +5', 43.8592], ['공격 시 3% 확률로 32의 HP 회복', 38.5960], [' 공격 시 3% 확률로 32의 MP 회복', 33.3328], ['공격 시 10% 확률로 6레벨 중독효과 적용', 28.0696], ['공격 시 5% 확률로 2레벨 기절효과 적용', 22.8064], ['공격 시 10% 확률로 2레벨 슬로우효과 적용', 17.5432], ['공격 시 10% 확률로 3레벨 암흑효과 적용', 12.2800], ['공격 시 5% 확률로 2레벨 빙결효과 적용', 7.0168], ['공격 시 5% 확률로 2레벨 봉 인효과 적용', 1.7536], ['몬스터 방어율 무시 : +15%', 0.0000]]
        const second = [['STR : +6', 87.5125], ['DEX : +6', 75.0250], ['INT : +6', 62.5375], ['LUK : +6', 50.0500], ['최대 HP : +60', 31.3187], ['최대 MP : +60', 12.5874], ['공격력 : +6', 6.3436], ['마력 : +6', 0.0998], ['STR : +12', 0.0963], ['DEX : +12', 0.0928], ['INT : +12', 0.0893], ['LUK : +12', 0.0858], ['최대 HP : +120', 0.0805], ['최대 MP : +120', 0.0752], ['공격력 : +12', 0.0717], ['마력 : +12', 0.0682], ['STR : +3%', 0.0647], ['DEX : +3%', 0.0612], ['INT : +3%', 0.0577], ['LUK : +3%', 0.0542], ['공격력 : +3%', 0.0524], ['마력 : +3%', 0.0506], ['크리티컬 확률 : +4%', 0.0488], ['데미지 : +3%', 0.0470], ['올스탯 : +5', 0.0435], ['공격 시 3% 확률로 32의 HP 회복', 0.0382], ['공격 시 3% 확률로 32의 MP 회복', 0.0329], ['공격 시 10% 확률로 6레벨 중독효과 적용', 0.0276], ['공격 시 5% 확률로 2레벨 기절효과 적용', 0.0223], ['공 격 시 10% 확률로 2레벨 슬로우효과 적용', 0.0170], ['공격 시 10% 확률로 3레벨 암흑효 과 적용', 0.0117], ['공격 시 5% 확률로 2레벨 빙결효과 적용', 0.0064], ['공격 시 5%  확률로 2레벨 봉인효과 적용', 0.0011], ['몬스터 방어율 무시 : +15%', 0.0000]]        
        const third = [['STR : +6', 87.5125], ['DEX : +6', 75.0250], ['INT : +6', 62.5375], ['LUK : +6', 50.0500], ['최대 HP : +60', 31.3187], ['최대 MP : +60', 12.5874], ['공격력 : +6', 6.3436], ['마력 : +6', 0.0998], ['STR : +12', 0.0963], ['DEX : +12', 0.0928], ['INT : +12', 0.0893], ['LUK : +12', 0.0858], ['최대 HP : +120', 0.0805], ['최대 MP : +120', 0.0752], ['공격력 : +12', 0.0717], ['마력 : +12', 0.0682], ['STR : +3%', 0.0647], ['DEX : +3%', 0.0612], ['INT : +3%', 0.0577], ['LUK : +3%', 0.0542], ['공격력 : +3%', 0.0524], ['마력 : +3%', 0.0506], ['크리티컬 확률 : +4%', 0.0488], ['데미지 : +3%', 0.0470], ['올스탯 : +5', 0.0435], ['공격 시 3% 확률로 32의 HP  회복', 0.0382], ['공격 시 3% 확률로 32의 MP 회복', 0.0329], ['공격 시 10% 확률로 6레벨 중독효과 적용', 0.0276], ['공격 시 5% 확률로 2레벨 기절효과 적용', 0.0223], ['공 격 시 10% 확률로 2레벨 슬로우효과 적용', 0.0170], ['공격 시 10% 확률로 3레벨 암흑효 과 적용', 0.0117], ['공격 시 5% 확률로 2레벨 빙결효과 적용', 0.0064], ['공격 시 5%  확률로 2레벨 봉인효과 적용', 0.0011], ['몬스터 방어율 무시 : +15%', 0.0000]]
    }
    else if (cubeGrade == 1) { // case in epic
        const first = [['STR : +6%', 92.3077], ['DEX : +6%', 84.6154], ['INT : +6%', 76.9231], ['LUK : +6%', 69.2308], ['최대 HP : +6%', 57.6923], ['최대 MP : +6%', 46.1538], ['공격력 : +6%', 42.3076], ['마력 : +6%', 38.4614], ['크리티컬 확률 : +8%', 34.6152], ['데미지 : +6%', 30.7690], ['올스탯 : +3%', 26.9228], ['공격 시 3% 확률로 53의 HP  회복', 15.3843], ['공격 시 3% 확률로 53의 MP 회복', 3.8458], ['몬스터 방어율 무시 : +15%', 0.0000]]
        const second = [['STR : +12', 96.5260], ['DEX : +12', 93.0520], ['INT : +12', 89.5780], ['LUK : +12', 86.1040], ['최대 HP : +120', 80.8930], ['최대 MP : +120', 75.6820], ['공격력 : +12', 72.2080], ['마력 : +12', 68.7340], ['STR : +3%', 65.2600], ['DEX : +3%', 61.7860], ['INT : +3%', 58.3120], ['LUK : +3%', 54.8380], ['공격력 : +3%', 53.1010], ['마력 : +3%', 51.3640], ['크리티컬 확률 : +4%', 49.6270], ['데미지 : +3%', 47.8900], ['올스탯 : +5', 44.4160], ['공격 시 3% 확률로 32의 HP 회복', 39.2050], ['공격 시 3% 확률로 32의 MP 회복', 33.9940], ['공격 시 10% 확률로 6레벨 중독효과 적용', 28.7830], ['공격 시 5% 확률로 2레벨 기절효과 적용', 23.5720], ['공격 시 10% 확률로 2레벨 슬로우효과 적용', 18.3610], ['공격 시 10% 확률로 3레벨 암흑효과 적용', 13.1500], ['공격 시 5% 확률로 2레벨 빙결효과 적용', 7.9390], ['공격 시 5% 확률로 2레벨 봉인효과 적용', 2.7280], ['몬스터 방어율 무시 : +15%', 0.9910], ['STR : +6%', 0.9148], ['DEX : +6%', 0.8386], ['INT : +6%', 0.7624], ['LUK : +6%', 0.6862], ['최대 HP : +6%', 0.5720], ['최대 MP : +6%', 0.4578], ['공격력 : +6%', 0.4197], ['마력 : +6%', 0.3816], ['크리티컬 확률 : +8%', 0.3435], ['데미지 : +6%', 0.3054], ['올스탯 : +3%', 0.2673], ['공격 시 3% 확률로 53의 HP 회복', 0.1531], ['공격 시 3% 확률로 53의 MP 회복', 0.0389], ['몬스터 방어율 무시 : +15%', 0.0000]]
        const third = [['STR : +12', 96.5260], ['DEX : +12', 93.0520], ['INT : +12', 89.5780], ['LUK : +12', 86.1040], ['최대 HP : +120', 80.8930], ['최대 MP : +120', 75.6820], ['공격력 : +12', 72.2080], ['마력 : +12', 68.7340], ['STR : +3%', 65.2600], ['DEX : +3%', 61.7860], ['INT : +3%', 58.3120], ['LUK : +3%', 54.8380], ['공격력 : +3%', 53.1010], ['마력 : +3%', 51.3640], ['크리티컬 확률 : +4%', 49.6270], ['데미지 : +3%', 47.8900], ['올스탯 : +5', 44.4160], ['공격 시 3% 확률로 32의 HP 회복', 39.2050], ['공격 시 3% 확률로 32의 MP 회복', 33.9940], ['공격 시 10% 확률로 6레벨 중독효 과 적용', 28.7830], ['공격 시 5% 확률로 2레벨 기절효과 적용', 23.5720], ['공격 시 10% 확률로 2레벨 슬로우효과 적용', 18.3610], ['공격 시 10% 확률로 3레벨 암흑효과 적용', 13.1500], ['공격 시 5% 확률로 2레벨 빙결효과 적용', 7.9390], ['공격 시 5% 확률로 2레벨 봉인효과 적용', 2.7280], ['몬스터 방어율 무시 : +15%', 0.9910], ['STR : +6%', 0.9148], ['DEX : +6%', 0.8386], ['INT : +6%', 0.7624], ['LUK : +6%', 0.6862], ['최대 HP : +6%', 0.5720], ['최대 MP : +6%', 0.4578], ['공격력 : +6%', 0.4197], ['마력 : +6%', 0.3816], ['크리티컬 확률 : +8%', 0.3435], ['데미지 : +6%', 0.3054], ['올스탯 : +3%', 0.2673], ['공격 시 3% 확률로 53의 HP 회복', 0.1531], ['공격 시 3% 확률로 53의 MP 회복', 0.0389], ['몬스터 방어율 무시 : +15%', 0.0000]]
    }
}