let express = require("express");

let PORT = process.env.PORT || 5000;

let app = express();

app.use(express.static('public'));
app.get('/invite',function(req,res){
    res.sendFile(__dirname+'/public/Invitation.html');
});
app.listen(PORT, () => console.log(`app listening on port ${PORT}`));