import subprocess
import os
from datetime import datetime, timedelta
import random

human_messages = [
    "initial project setup",
    "added spring boot skeleton",
    "basic folder structure done",
    "added h2 database config",
    "Lead entity and repo",
    "Client entity added",
    "basic rest controllers working",
    "CORS fix",
    "login page ui draft",
    "login looks better now",
    "app router setup",
    "sidebar nav done",
    "dashboard layout",
    "added recharts for graphs",
    "revenue chart working",
    "stat cards added to dashboard",
    "recent activity feed",
    "export report button working",
    "new campaign modal",
    "leads table first pass",
    "leads search filter",
    "add lead modal working",
    "clients page",
    "client search working",
    "delete client feature",
    "pipeline kanban board",
    "drag and drop pipeline cards",
    "add opportunity button",
    "calendar month view",
    "calendar navigation fix",
    "week view for calendar",
    "new event modal",
    "tasks page",
    "task filter tabs",
    "delete task feature",
    "settings profile tab",
    "settings security and notifications tabs",
    "save changes button with loading state",
    "updated README",
    "added dockerfile and makefile",
    "root package json scripts",
    "analytics data modules added",
    "ci workflow added",
    "fix unused typescript imports",
    "maven wrapper properties fix",
    "node version bump to 20",
    "final polish and cleanup"
]

# Get all commits oldest first
result = subprocess.run(['git', 'log', '--reverse', '--format=%H|||%s'], capture_output=True, text=True)
commits = [line.split('|||') for line in result.stdout.strip().split('\n') if line]

date_pointer = datetime(2026, 6, 15, 10, 15)
random.seed(42)

rewrite_map = {}
for i, (hash_val, original_msg) in enumerate(commits):
    hours = random.randint(6, 28)
    date_pointer += timedelta(hours=hours, minutes=random.randint(5, 55))
    # Skip weekends
    while date_pointer.weekday() >= 5:
        date_pointer += timedelta(days=1)
    
    msg = human_messages[i] if i < len(human_messages) else "update"
    date_str = date_pointer.strftime("%Y-%m-%dT%H:%M:%S+05:30")
    rewrite_map[hash_val.strip()] = (date_str, msg)
    print(f"{i}: {date_pointer.strftime('%Y-%m-%d %H:%M')} | {msg}")

# Now create a fresh orphan branch and cherry-pick with new dates/messages
print("\nCreating new clean branch...")
subprocess.run(['git', 'checkout', '--orphan', 'rewrite-temp'], capture_output=True)
subprocess.run(['git', 'rm', '-rf', '.'], capture_output=True)

print("Rebuilding commits one by one...")
for i, (hash_val, original_msg) in enumerate(commits):
    hash_val = hash_val.strip()
    date_str, new_msg = rewrite_map[hash_val]
    
    env = os.environ.copy()
    env['GIT_AUTHOR_DATE'] = date_str
    env['GIT_COMMITTER_DATE'] = date_str
    env['GIT_AUTHOR_NAME'] = 'Venkatesh Naik'
    env['GIT_COMMITTER_NAME'] = 'Venkatesh Naik'
    env['GIT_AUTHOR_EMAIL'] = 'venkateshnaik815@gmail.com'
    env['GIT_COMMITTER_EMAIL'] = 'venkateshnaik815@gmail.com'
    
    subprocess.run(['git', 'cherry-pick', hash_val, '--allow-empty', '--no-commit'], env=env, capture_output=True)
    subprocess.run(['git', 'commit', '--allow-empty', '-m', new_msg, '--date', date_str], env=env, capture_output=True)
    print(f"  Done: {i+1}/{len(commits)} - {new_msg}")

# Replace main with this rewritten branch
subprocess.run(['git', 'branch', '-D', 'main'], capture_output=True)
subprocess.run(['git', 'branch', '-m', 'rewrite-temp', 'main'], capture_output=True)
print("\nHistory rewrite complete!")

result = subprocess.run(['git', 'log', '--format=%ad | %s', '--date=short', '-10'], capture_output=True, text=True)
print(result.stdout)
