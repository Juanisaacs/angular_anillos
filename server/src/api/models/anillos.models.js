const mongoose = require('mongoose');



const anilloSchema = new mongoose.Schema({ 
    name: { type: 'string,',
},
realname: { type: 'string'
},
power: { type: 'string'
},
origin: { type: 'string'
},
agent: { type: 'string'
},
collection: { type: 'string'
},

});
module.exports = mongoose.model('anillos', anilloSchema)
moodule.exports = Anillo