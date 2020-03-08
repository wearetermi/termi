# .github/main.workflow
workflow "New workflow" {
  on = "push"
  resolves = ["glitch-tools/sync-glitch-github-action@master"]
}

action "glitch-tools/sync-glitch-github-action@master" {
  uses = "glitch-tools/sync-glitch-github-action@master"
  secrets = ["071f2bde-2664-4022-8532-588aacb95870", "c1ebe83c-9c02-435c-9b29-ece51bec1441"]
}
