Generating a new SSH key and adding it to the ssh-agent
Mac Windows Linux All

After you've checked for existing SSH keys, you can generate a new SSH key to use for authentication, then add it to the ssh-agent.

If you don't already have an SSH key, you must generate a new SSH key. If you're unsure whether you already have an SSH key, check for existing keys.

If you don't want to reenter your passphrase every time you use your SSH key, you can add your key to the SSH agent, which manages your SSH keys and remembers your passphrase.
Generating a new SSH key

    Open Terminal.

    Paste the text below, substituting in your GitHub Enterprise email address.

    $ ssh-keygen -t rsa -b 4096 -C "your_email@example.com"

    This creates a new ssh key, using the provided email as a label.

    > Generating public/private rsa key pair.

    When you're prompted to "Enter a file in which to save the key," press Enter. This accepts the default file location.

    > Enter a file in which to save the key (/home/you/.ssh/id_rsa): [Press enter]

    At the prompt, type a secure passphrase. For more information, see "Working with SSH key passphrases".

    > Enter passphrase (empty for no passphrase): [Type a passphrase]
    > Enter same passphrase again: [Type passphrase again]

Adding your SSH key to the ssh-agent

Before adding a new SSH key to the ssh-agent to manage your keys, you should have checked for existing SSH keys and generated a new SSH key.

    Start the ssh-agent in the background.

    $ eval "$(ssh-agent -s)"
    > Agent pid 59566

    Add your SSH private key to the ssh-agent. If you created your key with a different name, or if you are adding an existing key that has a different name, replace id_rsa in the command with the name of your private key file.

    $ ssh-add ~/.ssh/id_rsa

    Add the SSH key to your GitHub account.


