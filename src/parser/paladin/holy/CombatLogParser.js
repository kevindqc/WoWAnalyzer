import CoreCombatLogParser from 'parser/core/CombatLogParser';
import LowHealthHealing from 'parser/shared/modules/features/LowHealthHealing';
import ManaLevelChart from 'parser/shared/modules/resources/mana/ManaLevelChart';
import ManaUsageChart from 'parser/shared/modules/resources/mana/ManaUsageChart';

import LightOfDawnNormalizer from './normalizers/LightOfDawn';
import BeaconOfVirtueNormalizer from './normalizers/BeaconOfVirtue';

import BeaconTransferFactor from './modules/beacons/BeaconTransferFactor';
import BeaconHealSource from './modules/beacons/BeaconHealSource';
import BeaconHealingDone from './modules/beacons/BeaconHealingDone';
import BeaconTargets from './modules/beacons/BeaconTargets';
import MissingBeacons from './modules/beacons/MissingBeacons';
import FailedBeaconTransfers from './modules/beacons/FailedBeaconTransfers';
import DirectBeaconHealing from './modules/beacons/DirectBeaconHealing';
import BeaconUptime from './modules/beacons/BeaconUptime';
import HammerOfWrath from '../shared/spells/HammerOfWrath';

import PaladinAbilityTracker from './modules/core/PaladinAbilityTracker';
import CastBehavior from './modules/CastBehavior';
import Overhealing from './modules/Overhealing';
import FillerLightOfTheMartyrs from './modules/FillerLightOfTheMartyrs';
import InefficientLightOfTheMartyrs from './modules/InefficientLightOfTheMartyrs';
import FillerFlashOfLight from './modules/FillerFlashOfLight';
import LightOfDawn from './modules/LightOfDawn';
import LightOfDawnIndexer from './modules/LightOfDawnIndexer';

import Abilities from './modules/Abilities';
import Buffs from './modules/Buffs';
import Checklist from './modules/checklist/Module';
import MasteryEffectiveness from './modules/MasteryEffectiveness';
import AlwaysBeCasting from './modules/AlwaysBeCasting';
import CooldownThroughputTracker from './modules/CooldownThroughputTracker';
import StatValues from './modules/StatValues';

import MightOfTheMountain from './modules/MightOfTheMountain';

import RuleOfLaw from './modules/talents/RuleOfLaw';
import DevotionAuraDamageReduction from './modules/talents/DevotionAuraDamageReduction';
import HolyAvenger from '../shared/talents/HolyAvenger';
import DivinePurpose from '../shared/talents/DivinePurpose';
import CrusadersMight from './modules/talents/CrusadersMight';
import AvengingCrusader from './modules/talents/AvengingCrusader';
import JudgmentOfLight from './modules/talents/JudgmentOfLight';
import GlimmerOfLight from './modules/talents/GlimmerOfLight';

import HolyPowerTracker from '../shared/holypower/HolyPowerTracker';
import HolyPowerDetails from '../shared/holypower/HolyPowerDetails';

import { ABILITIES_AFFECTED_BY_HEALING_INCREASES } from './constants';

class CombatLogParser extends CoreCombatLogParser {
  static abilitiesAffectedByHealingIncreases = ABILITIES_AFFECTED_BY_HEALING_INCREASES;

  static specModules = {
    // Normalizers
    lightOfDawnNormalizer: LightOfDawnNormalizer,
    beaconOfVirtueNormalizer: BeaconOfVirtueNormalizer,

    // Override the ability tracker so we also get stats for IoL and beacon healing
    abilityTracker: PaladinAbilityTracker,
    lowHealthHealing: LowHealthHealing,

    // PaladinCore
    beaconTransferFactor: BeaconTransferFactor,
    beaconHealSource: BeaconHealSource,
    beaconHealingDone: BeaconHealingDone,
    beaconTargets: BeaconTargets,
    missingBeacons: MissingBeacons,
    failedBeaconTransfers: FailedBeaconTransfers,
    directBeaconHealing: DirectBeaconHealing,
    beaconUptime: BeaconUptime,
    castBehavior: CastBehavior,
    overhealing: Overhealing,
    fillerLightOfTheMartyrs: FillerLightOfTheMartyrs,
    inefficientLightOfTheMartyrs: InefficientLightOfTheMartyrs,
    fillerFlashOfLight: FillerFlashOfLight,
    lightOfDawn: LightOfDawn,
    lightOfDawnIndexer: LightOfDawnIndexer,
    hammerOfWrath: HammerOfWrath,

    // Generic healer things
    manaLevelChart: ManaLevelChart,
    manaUsageChart: ManaUsageChart,

    // Features
    checklist: Checklist,
    abilities: Abilities,
    buffs: Buffs,
    masteryEffectiveness: MasteryEffectiveness,
    alwaysBeCasting: AlwaysBeCasting,
    cooldownThroughputTracker: CooldownThroughputTracker,
    statValues: StatValues,

    // Racials
    mightOfTheMountain: MightOfTheMountain,

    // Talents
    ruleOfLaw: RuleOfLaw,
    devotionAuradamageReduction: DevotionAuraDamageReduction,
    holyAvenger: HolyAvenger,
    divinePurpose: DivinePurpose,
    crusadersMight: CrusadersMight,
    avengingCrusader: AvengingCrusader,
    judgmentOfLight: JudgmentOfLight,
    glimmerOfLight: GlimmerOfLight,

    // HolyPower
    holyPowerTracker: HolyPowerTracker,
    holyPowerDetails: HolyPowerDetails,
  };
}

export default CombatLogParser;
