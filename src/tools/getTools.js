import sasAssistant from './sasAssistant';
function getTools(domain) {
  let list = {sasAssistant: sasAssistant};
  return list[domain];
}
export default getTools