using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace broadcast
{
    public partial class Draft : Form
    {
        IList<Pick> Picks;

        private int pickNumber;

        private FileService files;

        public Draft()
        {
            InitializeComponent();
            files = new FileService();
            
            files.Write("ticker.txt", "Draft Selection:  ");

            pickNumber = 1;

            Picks = new List<Pick>();

            columnHeader1.Width = draftOrder.Size.Width - 20;

            var players = new List<string>()
            {
                "Allen, Ryan",
                "Antioch, Paul",
                "Bauer, Kyle",
                "Biliti, Paul",
                "Booker, Marvin",
                "Braunscheidel, Tim",
                "Brennan, Joe",
                "Bustamante, Brian",
                "Cipparone, David",
                "Clauser, Cameron",
                "Coan, Jeremy",
                "Crnkovich, Matt",
                "Cunningham, Darren",
                "D'Onofrio, Tim",
                "Drager, Jeremy",
                "Dragovic, Andy",
                "Edge, Brian",
                "Eidt, John",
                "Eisenmenger, Shaun",
                "Ellis, Jim",
                "Ellis, Joe",
                "Femminineo, Andy",
                "Floreno, John",
                "Gibb, Bob",
                "Gram, Charlie",
                "Hardy, Shawn",
                "Hetes, Andrew",
                "Judge, Dave",
                "Kimmel, Tim",
                "LePoudre, Eric",
                "LePoudre, Matt",
                "LeRoy, Brian",
                "Lesner, Dylan",
                "Macehern, Chase",
                "Machi, Charles",
                "Machi, Sam",
                "Madaleno, Bryan",
                "Maffesoli, Ryan",
                "McShannock, Jason",
                "Millson, Doug",
                "Monette, Ryan",
                "Myers, Nick",
                "Neville, Colin",
                "Niphoratos, Pete",
                "Olivere, Kevin",
                "Orlandi, Giorgio",
                "Otto, Todd",
                "Otto, Troy",
                "Otto, Tye",
                "Pearcy, Brian",
                "Pelot, Mark",
                "Pfister, Chris",
                "Podolan, Dave",
                "Powers, AJ",
                "Proctor, Paul",
                "Ratliff, Dan",
                "Riley, Aaron",
                "Serda, Jack",
                "Shepard, Michael",
                "Sikorski, Mike",
                "Simonelli, Alan",
                "Skillman, Jeff",
                "Slocum, Ben",
                "Starr, Jon",
                "Suits, Bill",
                "Suokas, Adam",
                "Taylor, Chris",
                "Taylor, Matt",
                "Turnbull, Dave",
                "Vinande, David",
                "Weaver, Jim",
                "Wood, Keith",
                "Wright, Justin",
                "Wrubel, James",
                "Young, Trent",
                "Zamierowski, Allan",
                "Zemmin, Ryan"
            };
            players.ForEach(x => playersListBox.Items.Add(x));

            UpdateOnTheClockLabel();
        }

        private void UpdateOnTheClockLabel()
        {
            ontheclockLabel.Text = $"The {teamsListBox.SelectedItem?.ToString() ?? "Team"} are On the Clock: #{pickNumber}";
        }

        private void draftButton_Click(object sender, EventArgs e)
        {
            if (teamsListBox.SelectedItem == null || playersListBox.SelectedItem == null)
            {
                return;
            }

            var pick = $"#{pickNumber} - {playersListBox.SelectedItem} - {teamsListBox.SelectedItem}";

            draftOrder.Items.Add(pick);

            playersListBox.Items.Remove(playersListBox.SelectedItem);

            files.PushContent("fifth-pick.txt", "sixth-pick.txt");
            files.PushContent("fourth-pick.txt", "fifth-pick.txt");
            files.PushContent("third-pick.txt", "fourth-pick.txt");
            files.PushContent("second-pick.txt", "third-pick.txt");
            files.PushContent("first-pick.txt", "second-pick.txt");

            files.Write("first-pick.txt", pick);

            files.Concat("ticker.txt", "     |     " + pick );

            pickNumber++;
            UpdateOnTheClockLabel();
        }

        private void teamsListBox_SelectedIndexChanged(object sender, EventArgs e)
        {
            UpdateOnTheClockLabel();
        }

        private void pickNumberUp_Click(object sender, EventArgs e)
        {
            pickNumber++;
            UpdateOnTheClockLabel();
        }

        private void pickNumberDown_Click(object sender, EventArgs e)
        {
            pickNumber--;
            UpdateOnTheClockLabel();
        }
    }
}
