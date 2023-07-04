/** @format */

// {
//     "player_name": "Lionel Messi",
//     "position": "Forward",
//     "team": "PSG",
//     "goals": 724,
//     "assists": 302,
//     "nationality": "Argentina",
//     "age": 34,
//     "mutable":true
//   }
const validator = (req, res, next) => {
  const {
    player_name,
    position,
    team,
    goals,
    assists,
    nationality,
    age,
    mutable,
  } = req.body;
  if ((player_name && position && team && goals && assists && nationality && age && mutable)) {

    if(age>18 && age<40 && goals>50 && assists>20){
        if(position=="Forward" || position=="Midfielder" || position=="Defender" || position=="Goalkeeper"){
            next()
        }else{
            res.send({"err":"Incorrect details"})
        }
       
    }else{
        res.send({"err":"You are not eligible to Play"})
    }
//    next()
  } else {
    res.send({
      err: "Few fields are missing, cannot process the request",
    });
  }
};

module.exports = { validator };
