// This file is auto-generated by @nodepack/plugin-typescript
 
/* eslint-disable */
/* tslint:disable */

// Config
import ProjectConfigBase from './config'
// Plugins
import NodepackPluginApollo from '@nodepack/plugin-apollo/types/context'
import NodepackPluginExpress from '@nodepack/plugin-express/types/context'
// Project context files
import Db from '@/context/db'

interface ContextBase {
  config: ProjectConfigBase
}

export type Context = ContextBase
  & NodepackPluginApollo
  & NodepackPluginExpress
  & Db

export default Context