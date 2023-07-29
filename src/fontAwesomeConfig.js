// fontAwesomeConfig.js
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart, faUser, faEnvelope } from '@fortawesome/fontawesome-free-solid';

library.add(faHeart, faUser, faEnvelope);

// Optionally, you can export the library if you need it elsewhere in your application
export default library;
