// TODO: Export all HybridObjects here for the user

import { NitroModules } from 'react-native-nitro-modules'
import type { Math } from './specs/Math.nitro'

export const math = NitroModules.createHybridObject<Math>('Math')
