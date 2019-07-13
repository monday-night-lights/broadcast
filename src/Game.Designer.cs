namespace broadcast
{
    partial class Game
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.hometeamUpButton = new System.Windows.Forms.Button();
            this.hometeamScore = new System.Windows.Forms.TextBox();
            this.hometeamDownButton = new System.Windows.Forms.Button();
            this.hometeamGroup = new System.Windows.Forms.GroupBox();
            this.hometeamName = new System.Windows.Forms.TextBox();
            this.label1 = new System.Windows.Forms.Label();
            this.groupBox3 = new System.Windows.Forms.GroupBox();
            this.periodUpButton = new System.Windows.Forms.Button();
            this.periodTextbox = new System.Windows.Forms.TextBox();
            this.periodDownButton = new System.Windows.Forms.Button();
            this.awayteamGroup = new System.Windows.Forms.GroupBox();
            this.awayteamName = new System.Windows.Forms.TextBox();
            this.awayteamUpButton = new System.Windows.Forms.Button();
            this.awayteamScore = new System.Windows.Forms.TextBox();
            this.awayteamDownButton = new System.Windows.Forms.Button();
            this.broadcasters = new System.Windows.Forms.GroupBox();
            this.colorcommentarySubtitle = new System.Windows.Forms.TextBox();
            this.colorcommentaryName = new System.Windows.Forms.TextBox();
            this.playbyplaySubtitle = new System.Windows.Forms.TextBox();
            this.playbyplayName = new System.Windows.Forms.TextBox();
            this.gameName = new System.Windows.Forms.TextBox();
            this.hometeamGroup.SuspendLayout();
            this.groupBox3.SuspendLayout();
            this.awayteamGroup.SuspendLayout();
            this.broadcasters.SuspendLayout();
            this.SuspendLayout();
            // 
            // hometeamUpButton
            // 
            this.hometeamUpButton.Location = new System.Drawing.Point(6, 49);
            this.hometeamUpButton.Name = "hometeamUpButton";
            this.hometeamUpButton.Size = new System.Drawing.Size(75, 23);
            this.hometeamUpButton.TabIndex = 0;
            this.hometeamUpButton.Text = "Up";
            this.hometeamUpButton.UseVisualStyleBackColor = true;
            this.hometeamUpButton.Click += new System.EventHandler(this.hometeamUpButton_Click);
            // 
            // hometeamScore
            // 
            this.hometeamScore.Location = new System.Drawing.Point(6, 78);
            this.hometeamScore.Name = "hometeamScore";
            this.hometeamScore.ReadOnly = true;
            this.hometeamScore.Size = new System.Drawing.Size(75, 20);
            this.hometeamScore.TabIndex = 1;
            // 
            // hometeamDownButton
            // 
            this.hometeamDownButton.Location = new System.Drawing.Point(6, 101);
            this.hometeamDownButton.Name = "hometeamDownButton";
            this.hometeamDownButton.Size = new System.Drawing.Size(75, 23);
            this.hometeamDownButton.TabIndex = 2;
            this.hometeamDownButton.Text = "Down";
            this.hometeamDownButton.UseVisualStyleBackColor = true;
            this.hometeamDownButton.Click += new System.EventHandler(this.hometeamDownButton_Click);
            // 
            // hometeamGroup
            // 
            this.hometeamGroup.Controls.Add(this.hometeamName);
            this.hometeamGroup.Controls.Add(this.hometeamUpButton);
            this.hometeamGroup.Controls.Add(this.hometeamScore);
            this.hometeamGroup.Controls.Add(this.hometeamDownButton);
            this.hometeamGroup.Location = new System.Drawing.Point(12, 81);
            this.hometeamGroup.Name = "hometeamGroup";
            this.hometeamGroup.Size = new System.Drawing.Size(88, 132);
            this.hometeamGroup.TabIndex = 4;
            this.hometeamGroup.TabStop = false;
            this.hometeamGroup.Text = "Home Team";
            // 
            // hometeamName
            // 
            this.hometeamName.Location = new System.Drawing.Point(6, 20);
            this.hometeamName.Name = "hometeamName";
            this.hometeamName.Size = new System.Drawing.Size(76, 20);
            this.hometeamName.TabIndex = 3;
            this.hometeamName.TextChanged += new System.EventHandler(this.hometeamName_TextChanged);
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Font = new System.Drawing.Font("Microsoft Sans Serif", 24F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label1.Location = new System.Drawing.Point(18, 9);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(267, 37);
            this.label1.TabIndex = 6;
            this.label1.Text = "MNL Broadcaster";
            // 
            // groupBox3
            // 
            this.groupBox3.Controls.Add(this.periodUpButton);
            this.groupBox3.Controls.Add(this.periodTextbox);
            this.groupBox3.Controls.Add(this.periodDownButton);
            this.groupBox3.Location = new System.Drawing.Point(106, 81);
            this.groupBox3.Name = "groupBox3";
            this.groupBox3.Size = new System.Drawing.Size(88, 100);
            this.groupBox3.TabIndex = 5;
            this.groupBox3.TabStop = false;
            this.groupBox3.Text = "Period";
            // 
            // periodUpButton
            // 
            this.periodUpButton.Location = new System.Drawing.Point(6, 19);
            this.periodUpButton.Name = "periodUpButton";
            this.periodUpButton.Size = new System.Drawing.Size(75, 23);
            this.periodUpButton.TabIndex = 0;
            this.periodUpButton.Text = "Up";
            this.periodUpButton.UseVisualStyleBackColor = true;
            this.periodUpButton.Click += new System.EventHandler(this.periodUpButton_Click);
            // 
            // periodTextbox
            // 
            this.periodTextbox.Location = new System.Drawing.Point(6, 48);
            this.periodTextbox.Name = "periodTextbox";
            this.periodTextbox.ReadOnly = true;
            this.periodTextbox.Size = new System.Drawing.Size(75, 20);
            this.periodTextbox.TabIndex = 1;
            // 
            // periodDownButton
            // 
            this.periodDownButton.Location = new System.Drawing.Point(6, 71);
            this.periodDownButton.Name = "periodDownButton";
            this.periodDownButton.Size = new System.Drawing.Size(75, 23);
            this.periodDownButton.TabIndex = 2;
            this.periodDownButton.Text = "Down";
            this.periodDownButton.UseVisualStyleBackColor = true;
            this.periodDownButton.Click += new System.EventHandler(this.periodDownButton_Click);
            // 
            // awayteamGroup
            // 
            this.awayteamGroup.Controls.Add(this.awayteamName);
            this.awayteamGroup.Controls.Add(this.awayteamUpButton);
            this.awayteamGroup.Controls.Add(this.awayteamScore);
            this.awayteamGroup.Controls.Add(this.awayteamDownButton);
            this.awayteamGroup.Location = new System.Drawing.Point(200, 81);
            this.awayteamGroup.Name = "awayteamGroup";
            this.awayteamGroup.Size = new System.Drawing.Size(88, 132);
            this.awayteamGroup.TabIndex = 5;
            this.awayteamGroup.TabStop = false;
            this.awayteamGroup.Text = "Away Team";
            // 
            // awayteamName
            // 
            this.awayteamName.Location = new System.Drawing.Point(6, 20);
            this.awayteamName.Name = "awayteamName";
            this.awayteamName.Size = new System.Drawing.Size(76, 20);
            this.awayteamName.TabIndex = 3;
            this.awayteamName.TextChanged += new System.EventHandler(this.awayteamName_TextChanged);
            // 
            // awayteamUpButton
            // 
            this.awayteamUpButton.Location = new System.Drawing.Point(6, 49);
            this.awayteamUpButton.Name = "awayteamUpButton";
            this.awayteamUpButton.Size = new System.Drawing.Size(75, 23);
            this.awayteamUpButton.TabIndex = 0;
            this.awayteamUpButton.Text = "Up";
            this.awayteamUpButton.UseVisualStyleBackColor = true;
            this.awayteamUpButton.Click += new System.EventHandler(this.awayteamUpButton_Click);
            // 
            // awayteamScore
            // 
            this.awayteamScore.Location = new System.Drawing.Point(6, 78);
            this.awayteamScore.Name = "awayteamScore";
            this.awayteamScore.ReadOnly = true;
            this.awayteamScore.Size = new System.Drawing.Size(75, 20);
            this.awayteamScore.TabIndex = 1;
            // 
            // awayteamDownButton
            // 
            this.awayteamDownButton.Location = new System.Drawing.Point(6, 101);
            this.awayteamDownButton.Name = "awayteamDownButton";
            this.awayteamDownButton.Size = new System.Drawing.Size(75, 23);
            this.awayteamDownButton.TabIndex = 2;
            this.awayteamDownButton.Text = "Down";
            this.awayteamDownButton.UseVisualStyleBackColor = true;
            this.awayteamDownButton.Click += new System.EventHandler(this.awayteamDownButton_Click);
            // 
            // broadcasters
            // 
            this.broadcasters.Controls.Add(this.colorcommentarySubtitle);
            this.broadcasters.Controls.Add(this.colorcommentaryName);
            this.broadcasters.Controls.Add(this.playbyplaySubtitle);
            this.broadcasters.Controls.Add(this.playbyplayName);
            this.broadcasters.Location = new System.Drawing.Point(12, 219);
            this.broadcasters.Name = "broadcasters";
            this.broadcasters.Size = new System.Drawing.Size(276, 80);
            this.broadcasters.TabIndex = 7;
            this.broadcasters.TabStop = false;
            this.broadcasters.Text = "Broadcasters";
            // 
            // colorcommentarySubtitle
            // 
            this.colorcommentarySubtitle.Location = new System.Drawing.Point(167, 54);
            this.colorcommentarySubtitle.Name = "colorcommentarySubtitle";
            this.colorcommentarySubtitle.Size = new System.Drawing.Size(100, 20);
            this.colorcommentarySubtitle.TabIndex = 3;
            this.colorcommentarySubtitle.TextChanged += new System.EventHandler(this.colorcommentarySubtitle_TextChanged);
            // 
            // colorcommentaryName
            // 
            this.colorcommentaryName.Location = new System.Drawing.Point(167, 28);
            this.colorcommentaryName.Name = "colorcommentaryName";
            this.colorcommentaryName.Size = new System.Drawing.Size(100, 20);
            this.colorcommentaryName.TabIndex = 2;
            this.colorcommentaryName.TextChanged += new System.EventHandler(this.colorcommentaryName_TextChanged);
            // 
            // playbyplaySubtitle
            // 
            this.playbyplaySubtitle.Location = new System.Drawing.Point(10, 54);
            this.playbyplaySubtitle.Name = "playbyplaySubtitle";
            this.playbyplaySubtitle.Size = new System.Drawing.Size(100, 20);
            this.playbyplaySubtitle.TabIndex = 1;
            this.playbyplaySubtitle.TextChanged += new System.EventHandler(this.playbyplaySubtitle_TextChanged);
            // 
            // playbyplayName
            // 
            this.playbyplayName.Location = new System.Drawing.Point(10, 28);
            this.playbyplayName.Name = "playbyplayName";
            this.playbyplayName.Size = new System.Drawing.Size(100, 20);
            this.playbyplayName.TabIndex = 0;
            this.playbyplayName.TextChanged += new System.EventHandler(this.playbyplayName_TextChanged);
            // 
            // gameName
            // 
            this.gameName.Location = new System.Drawing.Point(12, 49);
            this.gameName.Name = "gameName";
            this.gameName.Size = new System.Drawing.Size(276, 20);
            this.gameName.TabIndex = 8;
            this.gameName.TextChanged += new System.EventHandler(this.gameName_TextChanged);
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(297, 312);
            this.Controls.Add(this.gameName);
            this.Controls.Add(this.broadcasters);
            this.Controls.Add(this.awayteamGroup);
            this.Controls.Add(this.groupBox3);
            this.Controls.Add(this.label1);
            this.Controls.Add(this.hometeamGroup);
            this.Name = "Form1";
            this.Text = "MNL Broadcaster";
            this.hometeamGroup.ResumeLayout(false);
            this.hometeamGroup.PerformLayout();
            this.groupBox3.ResumeLayout(false);
            this.groupBox3.PerformLayout();
            this.awayteamGroup.ResumeLayout(false);
            this.awayteamGroup.PerformLayout();
            this.broadcasters.ResumeLayout(false);
            this.broadcasters.PerformLayout();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Button hometeamUpButton;
        private System.Windows.Forms.TextBox hometeamScore;
        private System.Windows.Forms.Button hometeamDownButton;
        private System.Windows.Forms.GroupBox hometeamGroup;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.TextBox hometeamName;
        private System.Windows.Forms.GroupBox groupBox3;
        private System.Windows.Forms.Button periodUpButton;
        private System.Windows.Forms.TextBox periodTextbox;
        private System.Windows.Forms.Button periodDownButton;
        private System.Windows.Forms.GroupBox awayteamGroup;
        private System.Windows.Forms.TextBox awayteamName;
        private System.Windows.Forms.Button awayteamUpButton;
        private System.Windows.Forms.TextBox awayteamScore;
        private System.Windows.Forms.Button awayteamDownButton;
        private System.Windows.Forms.GroupBox broadcasters;
        private System.Windows.Forms.TextBox colorcommentarySubtitle;
        private System.Windows.Forms.TextBox colorcommentaryName;
        private System.Windows.Forms.TextBox playbyplaySubtitle;
        private System.Windows.Forms.TextBox playbyplayName;
        private System.Windows.Forms.TextBox gameName;
    }
}

