import React from 'react';

import Analyzer from 'parser/core/Analyzer';
import Enemies from 'parser/shared/modules/Enemies';

import SpellLink from 'common/SpellLink';
import SPELLS from 'common/SPELLS';
import { formatPercentage } from 'common/format';
import STATISTIC_ORDER from 'interface/others/STATISTIC_ORDER';
import Statistic from 'interface/statistics/Statistic';
import BoringSpellValueText from 'interface/statistics/components/BoringSpellValueText';
import UptimeIcon from 'interface/icons/Uptime';
import { i18n } from '@lingui/core';
import { t } from '@lingui/macro';

class SunfireUptime extends Analyzer {
  get suggestionThresholds() {
    const sunfireUptime = this.enemies.getBuffUptime(SPELLS.SUNFIRE.id) / this.owner.fightDuration;
    return {
      actual: sunfireUptime,
      isLessThan: {
        minor: 0.95,
        average: 0.9,
        major: 0.8,
      },
      style: 'percentage',
    };
  }

  static dependencies = {
    enemies: Enemies,
  };
  statisticOrder = STATISTIC_ORDER.CORE(7);

  suggestions(when) {
    when(this.suggestionThresholds).addSuggestion((suggest, actual, recommended) => suggest(<>Your <SpellLink id={SPELLS.SUNFIRE.id} /> uptime can be improved. Try to pay more attention to your Sunfire on the boss.</>)
      .icon(SPELLS.SUNFIRE.icon)
      .actual(i18n._(t('druid.balance.suggestions.sunfire.uptime')`${formatPercentage(actual)}% Sunfire uptime`))
      .recommended(`>${formatPercentage(recommended)}% is recommended`));
  }

  statistic() {
    const sunfireUptime = this.enemies.getBuffUptime(SPELLS.SUNFIRE.id) / this.owner.fightDuration;
    return (
      <Statistic
        position={STATISTIC_ORDER.CORE(4)}
        size="flexible"
      >
        <BoringSpellValueText spell={SPELLS.SUNFIRE}>
          <>
            <UptimeIcon /> {formatPercentage(sunfireUptime)} % <small>uptime</small>
          </>
        </BoringSpellValueText>

      </Statistic>
    );
  }
}

export default SunfireUptime;
