import { MaxDepthOptions, maxDepthPlugin } from '@escape.tech/graphql-armor-max-depth';

import { EnvelopConfigurationEnhancement, EnvelopProtection } from './base-protection';

export class EnvelopMaxDepthProtection extends EnvelopProtection {
  get isEnabled(): boolean {
    if (!this.config.maxDepth) {
      return this.enabledByDefault;
    }
    return this.config.maxDepth.enabled ?? this.enabledByDefault;
  }

  get options(): MaxDepthOptions {
    return {
      n: this.config.maxDepth?.n || 6,
    };
  }

  protect(): EnvelopConfigurationEnhancement {
    return {
      plugins: [maxDepthPlugin(this.options)],
    };
  }
}
