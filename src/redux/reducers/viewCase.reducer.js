/**
 * @flow
 */
import produce from 'immer';

/**
 * @type {ViewFilesReducerProps}
 */
const initState = {
  isLoading: false,
  stole_item: '',
  folder_number: '',
  unit_number: '',
  agency_number: '',
  detail_item: '',
};

/**
 * @param {ViewFilesReducerProps} state
 * @param {ViewFilesReducerProps} action
 */
const viewCase = (state = initState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case 'CLEAN_VIEW_CASE':
        draft.stole_item = '';
        draft.folder_number = '';
        draft.unit_number = '';
        draft.agency_number = '';
        draft.detail_item = '';
        break;
      case 'GET_CASE':
        draft.history = action.history ? action.history : [];
        break;
      case 'VIEW_CASE_LOADING':
        draft.isLoading = action.isLoading ? action.isLoading : false;
        if (draft.isLoading) {
          draft.history = [];
        }
        break;
      case 'VIEW_CASE_DELETE':
        const deleted = action.data;
        if (deleted) {
          const index = draft.history.findIndex(
            item => item.CaseId === deleted.CaseId,
          );
          draft.history.splice(index, 1);
        }
        break;
      default:
        return state;
    }
  });

export default viewCase;
