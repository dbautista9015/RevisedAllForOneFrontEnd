using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using AllForOneBackends.Models;

namespace AllForOneBackends.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AllForOne : ControllerBase
    {
        [HttpPost]
        [Route("minich1")]

        public string MiniCh1(PersonModel name)
        {
            return $"Hello, {name.userName}";
        }

        [HttpPost]
        [Route("minich2")]

        public string MiniCh2(SummationModel numbers) 
        {
            return $"The sum of {numbers.userNum1} and {numbers.userNum2} is {numbers.userNum1 + numbers.userNum2}.";
        }

        [HttpPost]
        [Route("minich3")]

        public string MiniCh3(WokeModel user)
        {
            return $"{user.name} woke up at {user.time}{user.AMorPM}.";
        }

        [HttpPost]
        [Route("minich4")]

        public string MiniCh4(NumbersModel user)
        {
            string result;
            if (user.num1 > user.num2)
            {
                result = $"The first number: {user.num1} is greater than the second number: {user.num2}\n" +
                $"The second number: {user.num2} is less than the first number: {user.num1}";
            }
            else if (user.num1 < user.num2)
            {
                result = $"The first number: {user.num1} is less than the second number: {user.num2}\n" +
                $"The second number: {user.num2} is greater than the first number: {user.num1}";
            }
            else
            {
                result = $"The first number: {user.num1} is equal to the second number: {user.num2}\n" +
                $"The second number: {user.num2} is equal to the first number: {user.num1}";
            }

            return result;
        }

        [HttpPost]
        [Route("minich5")]

        public string MiniCh5(StoryModel word)
        {
            string story =  $" It was a {word.adjective}, cold November day.\n" + 
            $" I woke up to the great smell of {word.birdType} roasting in the {word.room} downstairs.\n" + 
            $" I {word.verb1} down the stairs to see if I could help {word.verb2} the dinner." +
            $" My mom said, \"See if {word.relativeName} needs a fresh {word.noun}.\"\n" + 
            $" So I carried a tray of glasses full of {word.liquid} into the {word.verb3} room.  \n" + 
            $" When I got there, I couldn't believe my {word.bodyPart}, it was Buzz Lightyear!\n";

            return story;
        }

        [HttpPost]
        [Route("minich6")]
        public string MiniCh6(OddOrEvenModel number)
        {
            return number.userNum % 2 == 0 ? $"The number {number.userNum} is even" : $"The number: {number.userNum} is odd";
        }

        [HttpPost]
        [Route("minich7")]

        public string MiniCh7(InputModel user)
        {
            string result = "";

            for (int i = user.value.Length - 1; i >= 0; i--)
            {
                result += user.value[i];
            }

            return result;
        }

        public List<CodeStackStudents> students = new List<CodeStackStudents>() 
        {
            
            new CodeStackStudents()
            {
                firstName = "Dylan",
                lastName = "McFarlin",
                email = "dmcfarlin@codestack.co",
                slackName = "Dylan McFarlin",
                hobbies = "Programming, reading and hanging out with family and friends"
            },
            
            new CodeStackStudents()
            {
                firstName = "Jesse",
                lastName = "Abarca",
                email = "jabarca@codestack.co",
                slackName = "Jesse Abarca",
                hobbies = "Baseball (SF Giants), Games:Halo"
            },

            new CodeStackStudents()
            {
                firstName = "An",
                lastName = "Nguyen",
                email = "anguyen@codestack.co",
                slackName = "An Nguyen",
                hobbies = "video games, tennis"
            },

            new CodeStackStudents()
            {
                firstName = "Danial",
                lastName = "Dad",
                email = "D.Dad@codestack.co",
                slackName = "Danial Dad",
                hobbies = "Basketball and Listening To Music"
            },

            new CodeStackStudents()
            {
                firstName = "Walaa",
                lastName = "AlSalmi",
                email = "walsalmi@codestack.co",
                slackName = "Walaa AlSalmi",
                hobbies = "quilting, camping"
            },

            new CodeStackStudents()
            {
                firstName = "Omar",
                lastName = "Vargas",
                email = "ovargas@codestack.co",
                slackName = "Omar Vargas",
                hobbies = "Dancing, singing, daydreaming"
            },

            new CodeStackStudents()
            {
                firstName = "Scott",
                lastName = "Morenzone",
                email = "smorenzone@codestack.co",
                slackName = "Scott Morenzone",
                hobbies = "Sports, listening to music"
            },

            new CodeStackStudents()
            {
                firstName = "Danny",
                lastName = "Tran",
                email = "dtran@codestack.co",
                slackName = "Danny Tran",
                hobbies = "playing video games, keyboard building and PC building"
            },

            new CodeStackStudents()
            {
                firstName = "Bria",
                lastName = "Harrold",
                email = "bharroldhill@codestack.co",
                slackName = "Bria Harrold",
                hobbies = "Singing and Playing video Games"
            },

            new CodeStackStudents()
            {
                firstName = "Joeseph",
                lastName = "Brown",
                email = "jbrown@codestack.co",
                slackName = "Joeseph Brown",
                hobbies = "sports, playing video games, listening to music, fashion, hanging with family"
            },

            new CodeStackStudents()
            {
                firstName = "Trent",
                lastName = "Barboza",
                email = "tbarboza@codestack.co",
                slackName = "Trent Barboza",
                hobbies = "snowboarding & video games"
            },

            new CodeStackStudents()
            {
                firstName = "Daniel",
                lastName = "Bautista",
                email = "dbautista@codestack.co",
                slackName = "DB",
                hobbies = "Sports, listening to music, watch anime"
            },

            new CodeStackStudents()
            {
                firstName = "Sophie",
                lastName = "Espejo",
                email = "sespejo@codestack.co",
                slackName = "Sophie Espejo",
                hobbies = "baking and crossword puzzles"
            },

            new CodeStackStudents()
            {
                firstName = "Peter",
                lastName = "Vang",
                email = "pvang@codestack.co",
                slackName = "Peter Vang",
                hobbies = "Fishing and playing video games"
            },

            new CodeStackStudents()
            {
                firstName = "Jovann",
                lastName = "Contreras",
                email = "jcontreras@codestack.co",
                slackName = "Jovann Contreras",
                hobbies = "Buying vintage items and collecting comics"
            }

        };
        [HttpPost]
        [Route("minich8")]
        public List<CodeStackStudents> MiniCh8()
        {
            return students;
        }


        [HttpPost]
        [Route("minich9")]
        public string MiniCh9(RestaurantsModel user)
        {
            Random rand = new Random();
            int randomNumber = rand.Next(0,user.restaurant.Length);

            return user.restaurant[randomNumber];
        }

        [HttpPost]
        [Route("minich11")]

        public string MiniCh11(MagicEightModel user)
        {
            Random rand = new Random();
            int randomNumber = rand.Next(0, user.answer.Length);

            return user.answer[randomNumber];
        }

        









        



    }
}
