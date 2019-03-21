using System;
using System.Windows.Forms;

namespace broadcast
{
    public partial class Form1 : Form
    {
        private FileService fileService;

        public Form1()
        {
            InitializeComponent();
            fileService = new FileService();

            hometeamName.Text = fileService.ReadString("hometeam-name.txt");
            hometeamScore.Text = fileService.ReadString("hometeam-score.txt");
            awayteamName.Text = fileService.ReadString("awayteam-name.txt");
            awayteamScore.Text = fileService.ReadString("awayteam-score.txt");

            periodTextbox.Text = fileService.ReadString("period.txt");
            gameName.Text = fileService.ReadString("gamename.txt");

            playbyplayName.Text = fileService.ReadString("playbyplay-name.txt");
            playbyplaySubtitle.Text = fileService.ReadString("playbyplay-subtitle.txt");
            colorcommentaryName.Text = fileService.ReadString("colorcommentary-name.txt");
            colorcommentarySubtitle.Text = fileService.ReadString("colorcommentary-subtitle.txt");
        }

        private void hometeamName_TextChanged(object sender, EventArgs e)
        {
            var file = "hometeam-name.txt";

            fileService.Write(file, hometeamName.Text);
            hometeamName.Text = fileService.ReadString(file);
        }

        private void hometeamUpButton_Click(object sender, EventArgs e)
        {
            var file = "hometeam-score.txt";

            fileService.Write(file, fileService.ReadInt(file) + 1);
            hometeamScore.Text = fileService.ReadString(file);
        }

        private void hometeamDownButton_Click(object sender, EventArgs e)
        {
            var file = "hometeam-score.txt";

            fileService.Write(file, fileService.ReadInt(file) - 1);
            hometeamScore.Text = fileService.ReadString(file);
        }

        private void awayteamName_TextChanged(object sender, EventArgs e)
        {
            var file = "awayteam-name.txt";

            fileService.Write(file, awayteamName.Text);
            awayteamName.Text = fileService.ReadString(file);
        }

        private void awayteamUpButton_Click(object sender, EventArgs e)
        {
            var file = "awayteam-score.txt";

            fileService.Write(file, fileService.ReadInt(file) + 1);
            awayteamScore.Text = fileService.ReadString(file);
        }

        private void awayteamDownButton_Click(object sender, EventArgs e)
        {
            var file = "awayteam-score.txt";

            fileService.Write(file, fileService.ReadInt(file) - 1);
            awayteamScore.Text = fileService.ReadString(file);
        }

        private void periodUpButton_Click(object sender, EventArgs e)
        {
            var file = "period.txt";

            fileService.Write(file, fileService.ReadInt(file) + 1);
            periodTextbox.Text = fileService.ReadString(file);
        }

        private void periodDownButton_Click(object sender, EventArgs e)
        {
            var file = "period.txt";

            fileService.Write(file, fileService.ReadInt(file) - 1);
            periodTextbox.Text = fileService.ReadString(file);
        }

        private void playbyplayName_TextChanged(object sender, EventArgs e)
        {
            var file = "playbyplay-name.txt";

            fileService.Write(file, playbyplayName.Text);
            playbyplayName.Text = fileService.ReadString(file);
        }

        private void playbyplaySubtitle_TextChanged(object sender, EventArgs e)
        {
            var file = "playbyplay-subtitle.txt";

            fileService.Write(file, playbyplaySubtitle.Text);
            playbyplaySubtitle.Text = fileService.ReadString(file);
        }

        private void colorcommentaryName_TextChanged(object sender, EventArgs e)
        {
            var file = "colorcommentary-name.txt";

            fileService.Write(file, colorcommentaryName.Text);
            colorcommentaryName.Text = fileService.ReadString(file);
        }

        private void colorcommentarySubtitle_TextChanged(object sender, EventArgs e)
        {
            var file = "colorcommentary-subtitle.txt";

            fileService.Write(file, colorcommentarySubtitle.Text);
            colorcommentarySubtitle.Text = fileService.ReadString(file);
        }

        private void gameName_TextChanged(object sender, EventArgs e)
        {
            var file = "gamename.txt";

            fileService.Write(file, gameName.Text);
            gameName.Text = fileService.ReadString(file);
        }
    }
}
