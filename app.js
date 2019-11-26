let express = require("express");

let app = express();

app.use(express.static('public'));
app.get('/invite',function(req,res){
    res.sendFile(__dirname+'/public/Invitation.html');
});
app.listen(80, () => console.log('app listening on port 80!'));