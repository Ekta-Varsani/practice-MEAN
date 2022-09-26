let mytodos={
    day : 'monday',
    mettings :0,
    meetdone : 0,


    addmeeting: function(){
        console.log(this);
    
    }
}

let mytodostwo={
    day : 'tuesday',
    mettings :12,
    meetdone : 3,


    addmeeting: function(meetings){
        this.meetings = this.meetings+meetings
    
    },

    summary: function(){
        return `you have ${meetings} meetings today!`
    }
}
mytodos.addmeeting(4)
console.log(mytodos.summary);


// ass
//handle meeting done
// create a fun that can reset entire day