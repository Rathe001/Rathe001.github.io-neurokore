import { combineReducers } from 'redux';
import ui from 'core/ui/reducers';
import splash from 'core/splash/reducers';
import dialog from 'core/dialog/reducers';
import characterCreation from 'core/characterCreation/reducers';
import party from 'core/party/reducers';

export default combineReducers({
  ui,
  splash,
  dialog,
  characterCreation,
  party,
});
