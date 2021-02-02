import * as cuid from 'cuid'
import { getIntrospectionQuery } from 'graphql'
import { getQueryTypes } from './components/Playground/util/getQueryTypes'
import { List, Map } from 'immutable'

export const columnWidth = 300

export const introspectionQuery = getIntrospectionQuery()

export const defaultQuery = '# Write your query or mutation here\n'

export const modalStyle = {
  overlay: {
    zIndex: 99999,
    backgroundColor: 'rgba(15,32,46,.9)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    position: 'relative',
    width: 976,
    height: 'auto',
    top: 'initial',
    left: 'initial',
    right: 'initial',
    bottom: 'initial',
    borderRadius: 2,
    padding: 0,
    border: 'none',
    background: 'none',
    boxShadow: '0 1px 7px rgba(0,0,0,.2)',
  },
}

export function getDefaultSession(endpoint: string) {
  return {
    id: cuid(),
    query: defaultQuery,
    variables: '',
    responses: List([]),
    endpoint,
    operationName: undefined,
    hasMutation: false,
    hasSubscription: false,
    hasQuery: false,
    queryTypes: getQueryTypes(defaultQuery),
    subscriptionActive: false,
    date: new Date(),
    starred: false,
    queryRunning: false,
    operations: List([]),
    isReloadingSchema: false,
    isSchemaPendingUpdate: false,
    responseExtensions: {},
    queryVariablesActive: false,
    endpointUnreachable: false,
    editorFlex: 1,
    variableEditorOpen: false,
    variableEditorHeight: 200,
    responseTracingHeight: 300,
    isExtensionsDrawerOpen: false,
    isTracingActive: false,
    docExplorerWidth: 350,
    variableToType: Map({}),
    headers: '',
    file: undefined,
    isFile: false,
    name: undefined,
    filePath: undefined,
    selectedUserToken: undefined,
    hasChanged: undefined,
    absolutePath: undefined,
    isSettingsTab: undefined,
    isConfigTab: undefined,
    currentQueryStartTime: undefined,
    currentQueryEndTime: undefined,
    nextQueryStartTime: undefined,
    tracingSupported: undefined,
    isQueryPlanSupported: undefined,
    changed: undefined,
    scrollTop: undefined,
  } as any
}
